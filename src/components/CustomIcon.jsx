import PropTypes from "prop-types";
import Icon from "@ant-design/icons";

import AppLogoSvg from "../assets/icons/app-logo.svg?react";

export const AppLogo = ({ size, fill }) => (
    <Icon
        component={() => (
            <AppLogoSvg style={{ width: size, height: "auto", fill: fill }} />
        )}
    />
);

AppLogo.propTypes = {
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    fill: PropTypes.string,
};
