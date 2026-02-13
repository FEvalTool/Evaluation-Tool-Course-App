import { Outlet } from "react-router-dom";

import useAuthValidator from "../hooks/useAuthValidator";
import { ROUTES, CLIENT_ROUTES } from "../constants";
import PageLoading from "../components/PageLoading";

const ProtectedRoute = () => {
    const { isValidate, isChecking } = useAuthValidator();

    if (isChecking) {
        return <PageLoading />;
    }
    if (isValidate) {
        return <Outlet />;
    }

    // Determine final destination base on current location
    let finalDestination;

    if (window.location.pathname === "/callback") {
        // If already on callback, extract the redirect param
        const params = new URLSearchParams(window.location.search);
        finalDestination = params.get("redirect") || ROUTES.DASHBOARD;
    } else {
        // Use current path as destination
        finalDestination = window.location.pathname + window.location.search;
    }
    const callbackUrl = encodeURIComponent(
        `${window.location.origin}${ROUTES.CALLBACK}?redirect=${finalDestination}`
    );
    window.location.replace(
        `${CLIENT_ROUTES.SSO_LOGIN}?redirect=${callbackUrl}`
    );
    return null;
};

export default ProtectedRoute;
