import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
const { Header, Content, Footer, Sider } = Layout;

class BackStage extends Component {
	render() {
		return (
			<Layout>
				<Sider
					breakpoint="lg"
					collapsedWidth="0"
					onCollapse={(collapsed, type) => {
						console.log(collapsed, type);
					}}
				>
					<div
						style={{
							height: "32px",
							background: "rgba(255, 255, 255, 0.2)",
							margin: "16px"
						}}
					/>
					<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
						<Menu.Item key="1">
							<Icon type="user" />
							<span className="nav-text">nav 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="video-camera" />
							<span className="nav-text">nav 2</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="upload" />
							<span className="nav-text">nav 3</span>
						</Menu.Item>
						<Menu.Item key="4">
							<Icon type="user" />
							<span className="nav-text">nav 4</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Content style={{ margin: "24px 16px 0" }}>
						<div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
							三生三世
						</div>
					</Content>
					<Footer style={{ textAlign: "center" }}>
						Ant Design ©2016 Created by Ant UED
					</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default BackStage;
