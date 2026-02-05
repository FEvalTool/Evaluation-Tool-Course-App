import { useState, useEffect } from "react";
import { Typography } from "antd";

const { Paragraph, Title } = Typography;

const DashboardPage = () => {
    const [message, setMessage] = useState();

    return (
        <>
            <Title>Testing page</Title>
            <Paragraph>
                This is a message from Backend (for development purposes)
            </Paragraph>
            <Paragraph>{message || "Something went wrong"}</Paragraph>
        </>
    );
};

export default DashboardPage;
