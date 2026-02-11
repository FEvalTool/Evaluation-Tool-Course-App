import { useEffect } from "react";
import { Spin, Flex, Typography } from "antd";

import { ROUTES } from "../constants";
import authService from "../services/authService";
import PageLoading from "../components/PageLoading";

const { Text } = Typography;

const CallbackPage = () => {
    useEffect(() => {
        const handleCallback = async () => {
            const params = new URLSearchParams(window.location.search);
            console.log("Callback params:", params.toString());
            const finalDestination = params.get("redirect") || ROUTES.DASHBOARD;
            console.log("Final destination:", finalDestination);
            try {
                console.log("Starting user data sync...");
                await authService.syncUserData();
                window.location.href = finalDestination;
            } catch (error) {
                console.error("Sync failed:", error);
            }
        };

        handleCallback();
    }, []);
    return <PageLoading message="Setting up your account..." />;
};

export default CallbackPage;
