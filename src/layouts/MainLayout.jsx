import { Outlet } from "react-router-dom";
import { Avatar, Button, Flex, Layout, Typography } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

import { LogoIcon } from "../components/CustomIcon";

const { Header } = Layout;
const { Text } = Typography;

const MainLayout = () => {
    return (
        <Layout style={{ width: "100vw", height: "100vh" }}>
            <Header
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#153450",
                    boxShadow: "0 3px 12px rgba(0, 0, 0, 0.25)",
                    zIndex: 10,
                }}
            >
                <LogoIcon size={64} />
                <Flex gap={10}>
                    <Button
                        shape="circle"
                        icon={<LogoutOutlined />}
                        aria-label="logout"
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
