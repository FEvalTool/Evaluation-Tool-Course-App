import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import App from "./App.jsx";
import "./assets/global.css";
import { appThemeConfig } from "./configs/themeConfig.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ConfigProvider theme={appThemeConfig}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ConfigProvider>
    </StrictMode>
);
