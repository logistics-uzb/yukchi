import { Button, Col, Form, Row, Typography } from "antd";
import { loadPostFields } from "./form-fields";

export const LoadPostForm = () => {
  const [form] = Form.useForm();
  const fromValue = Form.useWatch("from", form);
  const toValue = Form.useWatch("to", form);

  const fields = loadPostFields(fromValue, toValue);

  const handleFormSubmit = () => {
    const formValues = form.getFieldsValue();
    console.log(formValues, "formcvalues");
  };

  const handleResetClick = () => {
    form.resetFields();
  };

  const formInitialValues = {
    phone_number: "999999999",
    paymentCurrency: "usd",
  };

  return (
    <Form
      form={form}
      layout="vertical"
      name="load-post-form"
      className="w-[700px]"
      autoComplete="off"
      initialValues={formInitialValues}
      onFinish={handleFormSubmit}
    >
      <Typography.Title level={3} className="text-center">
        Create Load
      </Typography.Title>

      <Row gutter={[16, 16]}>
        {fields.map(({ span, label, name, rules, render }) => (
          <Col span={span} key={name}>
            <Form.Item label={label} name={name} rules={rules}>
              {render}
            </Form.Item>
          </Col>
        ))}

        <Col span={8}>
          <Button type="dashed" className="w-full" onClick={handleResetClick}>
            Rest
          </Button>
        </Col>
        <Col span={16}>
          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
