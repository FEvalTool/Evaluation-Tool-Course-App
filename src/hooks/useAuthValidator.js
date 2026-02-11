import { useEffect, useState } from "react";

import authService from "../services/authService";

export default function useAuthValidator() {
    const [isValidate, setIsValidate] = useState(false);
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const run = async () => {
            try {
                await validate();
                setIsValidate(true);
            } catch {
                setIsValidate(false);
            } finally {
                setIsChecking(false);
            }
        };

        const validate = async () => {
            try {
                await authService.verifyToken();
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    await refreshAccessToken();
                    return;
                }
                throw error;
            }
        };

        const refreshAccessToken = async () => {
            await authService.refreshToken();
            await authService.verifyToken();
        };

        run();
    }, []);

    return { isValidate, isChecking };
}
