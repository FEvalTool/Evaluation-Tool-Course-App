import { theme } from "antd";

export const appThemeConfig = {
    algorithm: theme.defaultAlgorithm,

    token: {
        colorPrimary: "#0891B2",
        colorSuccess: "#059669",
        colorWarning: "#F59E0B",
        colorError: "#DC2626",
        colorInfo: "#2563EB",
    },

    components: {
        Layout: {
            headerBg: "#ECFEFF",
            headerColor: "#0F172A",
            bodyBg: "#F0F9FF",
        },
    },
};
