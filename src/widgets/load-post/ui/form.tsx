/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Col, Form, Row, Spin, Typography } from "antd";
import { loadPostFields } from "./form-fields";
import { usePostLoadMutation } from "@entities/post-load";
import { useCallback, useMemo } from "react";

// === Types ===
interface LoadPostFormValues {
  title?: string;
  from?: string;
  to?: string;
  phone_number: string;
  weight?: string;
  pickupDate?: string;
  pickupTime?: string;
  vehicleType?: string;
  vehicleBodyType?: string;
  paymentType?: string;
  paymentAmount?: string;
  paymentCurrency: string;
  description?: string;
}

export const LoadPostForm = () => {
  const [form] = Form.useForm<LoadPostFormValues>();
  const [postLoad, { isLoading }] = usePostLoadMutation();

  // Watch fields that affect others
  const from = Form.useWatch("from", form);
  const to = Form.useWatch("to", form);

  // Memoized fields (prevents remount on every render)
  // const fields = useMemo(() => loadPostFields(from, to), [from, to]);
  const fields = useMemo(() => loadPostFields(), [from, to]);

  const initialValues: Partial<LoadPostFormValues> = {
    phone_number: "999999999",
    paymentCurrency: "usd",
  };

  // Stable handler (no re-renders)
  const handleSubmit = async () => {
    const values = form.getFieldsValue();
    try {
      const response = await postLoad(values).unwrap();
      console.log(response);
    } catch (error: any) {
      console.error("Submit failed:", error);
    } finally {
      form.resetFields();
    }
  };

  console.log(isLoading, "ialo");

  const handleReset = useCallback(() => {
    form.resetFields();
  }, [form]);

  return (
    <Form
      form={form}
      layout="vertical"
      name="load-post-form"
      initialValues={initialValues}
      className="w-[700px]"
      autoComplete="off"
      onFinish={handleSubmit}
    >
      <Typography.Title level={3} className="text-center">
        Create Load
      </Typography.Title>

      <Spin spinning={isLoading}>
        <Row gutter={[16, 16]}>
          {fields.map(({ span, label, name, rules, render }) => (
            <Col span={span} key={name}>
              <Form.Item label={label} name={name} rules={rules}>
                {render}
              </Form.Item>
            </Col>
          ))}

          <Col span={8}>
            <Button
              type="dashed"
              className="w-full"
              onClick={handleReset}
              disabled={isLoading}
            >
              Reset
            </Button>
          </Col>

          <Col span={16}>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              loading={isLoading}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Spin>
    </Form>
  );
};
