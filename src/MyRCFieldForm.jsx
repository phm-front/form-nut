import React, { Component } from "react";
// import Form, { Field } from "rc-field-form";
import Form, { Field } from "./components/my-rc-field-form";
import Input from './components/Input';

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

export default class MyRCFieldForm extends Component {
  onFinish(values) {
    console.log("Success:", values);
  }
  onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }
  render() {
    return (
      <div>
        <h3>MyRCFieldForm</h3>
        <Form
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Field name="username" rules={[nameRules]}>
            <Input placeholder="Username" />
          </Field>
          <Field name="password" rules={[passworRules]}>
            <Input placeholder="Password" />
          </Field>
          <button>Submit</button>
        </Form>
      </div>
    );
  }
}
