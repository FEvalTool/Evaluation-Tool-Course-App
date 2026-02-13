import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { routes } from "./routes.jsx";

function AppRoutes() {
    return useRoutes(routes);
}

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AppRoutes />
        </Suspense>
    );
}

export default App;
