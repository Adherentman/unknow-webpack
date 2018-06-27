import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Link } from 'react-router-dom';
import Login from './components/Auth/Login';
import MenuRouter from '../components/MenuRouter';
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
							height: '32px',
							background: 'rgba(255, 255, 255, 0.2)',
							margin: '16px'
						}}
					/>
					<MenuRouter />
				</Sider>
				<Layout>
					<Content style={{ margin: '24px 16px 0' }}>
						<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
							{this.props.children}
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Ant Design ©2016 Created by Ant UED
					</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default BackStage;
