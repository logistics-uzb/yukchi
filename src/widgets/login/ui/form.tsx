import { useLoginMutation } from "@entities/login/api";
import { Button, Form, Input, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const [form] = useForm();
  const [login] = useLoginMutation();

  const navigate = useNavigate();

  const handleFormSubmit = async () => {
    const formValues = form.getFieldsValue();
    console.log(formValues, "fornvalues");

    const res = await login({
      username: formValues.username,
      password: formValues.password,
    });

    const { access_token, phone_number } = res?.data?.data || {};

    if (access_token) {
      localStorage.setItem("token", access_token);
      localStorage.setItem("phone_number", phone_number);

      navigate("/load-post");
    }

    console.log(res, "formcvalues");

    // navigate("/load-post");
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
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
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
