import { useEffect } from 'react';
// import Form, { Field } from "rc-field-form";
import Form, { Field, useForm } from "./components/my-rc-field-form";
import Input from "./components/Input";

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

export default function MyRCFieldForm() {
  const [form] = useForm()
  function onFinish(values) {
    console.log("Success:", values);
  }
  function onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }
  useEffect(() => {
    console.log(form);
  })
  return (
    <div>
      <h3>MyRCFieldForm</h3>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
