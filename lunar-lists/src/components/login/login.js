import React from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
          message.loading('Alligning your stars...', 2.5)
          .then(() => {
            message.success('Your stars have now been alligned!', 1.0);
            console.log('Received values of form: ', values);
          })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <article className= "mw6 center h-50 bg-white shadow-5 br3pa3 pa4-ns  mv3 ba b--black-10">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Name"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Enter Your Birthplace"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Take Me To My Luna Lists
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      </article>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login;