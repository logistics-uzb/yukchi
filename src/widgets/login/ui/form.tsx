import { Button, Form, Input, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const [form] = useForm();

  const navigate = useNavigate();
  const handleFormSubmit = () => {
    const formValues = form.getFieldsValue();
    navigate("/load-post");

    console.log(formValues, "formcvalues");
  };
  return (
    <Form
      form={form}
      name="login-form"
      layout="vertical"
      className="w-[300px]"
      onFinish={handleFormSubmit}
    >
      <Typography.Title level={3} className="text-center">
        Login
      </Typography.Title>
      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
