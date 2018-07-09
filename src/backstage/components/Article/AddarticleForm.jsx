import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import { Row, Col, Form, Input, Button, Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class _AddarticleForm extends Component {
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Fragment>
				<Form
					onSubmit={e => {
						e.preventDefault();
						this.props.form.validateFieldsAndScroll((err, values) => {
							if (!err) {
								console.log(values);
							}
						});
					}}
				>
					<Row gutter={16}>
						<Col span={6}>
							<FormItem>
								{getFieldDecorator('title', {
									rules: [{ required: true, message: '请输入文章标题!' }]
								})(<Input placeholder="文章标题" />)}
							</FormItem>
						</Col>
						<Col span={4}>
							<FormItem>
								{getFieldDecorator('author', {
									rules: [{ required: true, message: '请输入作者!' }]
								})(<Input placeholder="文章作者" />)}
							</FormItem>
						</Col>
						<Col span={6}>
							<FormItem>
								{getFieldDecorator('category', {
									rules: [{ required: true, message: '请输入文章类别!' }]
								})(<Input placeholder="文章类别" />)}
							</FormItem>
						</Col>
						<Col span={6}>
							<FormItem>
								{getFieldDecorator('tag')(
									<Select mode="multiple" placeholder="为文章添加标签">
										<Option value="react">react</Option>
										<Option value="ng">ng</Option>
										<Option value="java">java</Option>
									</Select>
								)}
							</FormItem>
						</Col>
					</Row>
					<FormItem>
						<Button type="primary" htmlType="submit" />
					</FormItem>
				</Form>
			</Fragment>
		);
	}
}

const AddarticleForm = Form.create()(_AddarticleForm);

export default AddarticleForm;
