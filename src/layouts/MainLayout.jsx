import { Outlet } from "react-router-dom";
import { Avatar, Button, Flex, Layout, Typography } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

import { AppLogo } from "../components/CustomIcon";
import authService from "../services/authService";

const { Header } = Layout;
const { Text, Title } = Typography;

const MainLayout = () => {
    const handleLogout = async () => {
        try {
            await authService.logout();
            window.location.reload();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
    return (
        <Layout style={{ width: "100vw", height: "100vh" }}>
            <Header
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxShadow: "0 3px 12px rgba(0, 0, 0, 0.25)",
                    zIndex: 10,
                }}
            >
                <Flex align="center" gap={5}>
                    <AppLogo fill="#0891B2" size={45} />
                    <Title level={4} style={{ margin: 0 }}>
                        Course Management System
                    </Title>
                </Flex>

                <Flex gap={10}>
                    <Button
                        shape="circle"
                        icon={<LogoutOutlined />}
                        aria-label="logout"
                        onClick={handleLogout}
                    />
                    <Flex gap={5} align="center">
                        <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                        />
                        <Text style={{ color: "white" }}>Test</Text>
                    </Flex>
                </Flex>
            </Header>
            <Outlet />
        </Layout>
    );
};

export default MainLayout;
