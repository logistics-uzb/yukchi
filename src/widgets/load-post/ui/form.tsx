/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Col, Form, Row, Spin, Typography, Input, Select } from "antd";
import { currencyOptions } from "@shared/model/consts";
import { countries } from "@shared/model/consts/countries-with-regions";
import { usePostLoadMutation } from "@entities/post-load";
import { useCallback } from "react";
import { getLocalStorage } from "@shared/model/helpers";

interface LoadFormValues {
  countryFrom: string;
  regionFrom: string;
  countryTo: string;
  regionTo: string;
  title: string;
  weight: string;
  capacity?: string;
  vehicleType: string;
  vehicleBodyType?: string;
  paymentType?: "cash" | "online" | "combo";
  paymentAmount?: string;
  paymentCurrency?: "usd" | "sum";
  pickupDate: string;
  phone_number: string;
  description?: string;
}

export const LoadPostForm = () => {
  const [form] = Form.useForm<LoadFormValues>();
  const [postLoad, { isLoading }] = usePostLoadMutation();
  const userPhoneNumber = getLocalStorage("phone_number");

  const initialValues: Partial<LoadFormValues> = {
    phone_number: userPhoneNumber?.slice(4) || "",
    paymentCurrency: "usd",
  };

  const countryFromValue = Form.useWatch("countryFrom", form);
  const countryToValue = Form.useWatch("countryTo", form);

  const handleSubmit = async () => {
    const values = form.getFieldsValue();
    console.log(values);

    try {
      const response = await postLoad(values).unwrap();
      console.log(response);
    } catch (error: any) {
      console.error("Submit failed:", error);
    } finally {
      form.resetFields();
    }
  };

  const lorem = form.getFieldValue("countryFrom");
  console.log(lorem);

  const handleReset = useCallback(() => {
    form.resetFields();
  }, [form]);

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues}
      onFinish={handleSubmit}
      className="w-[700px]"
    >
      <Typography.Title level={3} className="text-center">
        Yuk yuborish
      </Typography.Title>

      <Spin spinning={isLoading}>
        <Row gutter={[16, 16]}>
          {/* From Country */}
          <Col span={6}>
            <Form.Item
              label="Qaysi davlatdan"
              name="countryFrom"
              rules={[{ required: true }]}
            >
              <Select
                autoFocus
                showSearch
                options={countries}
                onChange={() => form.setFieldsValue({ regionFrom: undefined })}
              />
            </Form.Item>
          </Col>

          {/* From Region */}
          {countryFromValue === "uzbekistan" ? (
            <Col span={6}>
              <Form.Item
                label="Qaysi viloyatdan"
                name="regionFrom"
                rules={[{ required: true }]}
              >
                <Select showSearch options={countries[0].regions} />
              </Form.Item>
            </Col>
          ) : (
            <Col span={6}>
              <Form.Item
                label="Qaysi viloyatdan"
                name="regionFrom"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
          )}

          {/* To Country */}
          <Col span={6}>
            <Form.Item
              label="Qaysi davlatga"
              name="countryTo"
              rules={[{ required: true }]}
            >
              <Select
                showSearch
                options={countries}
                onChange={() => form.setFieldsValue({ regionTo: undefined })}
              />
            </Form.Item>
          </Col>

          {/* To Region */}
          {countryToValue === "uzbekistan" ? (
            <Col span={6}>
              <Form.Item
                label="Qaysi viloyatdan"
                name="regionTo"
                rules={[{ required: true }]}
              >
                <Select showSearch options={countries[0].regions} />
              </Form.Item>
            </Col>
          ) : (
            <Col span={6}>
              <Form.Item
                label="Qaysi viloyatdan"
                name="regionTo"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
          )}

          {/* Title */}
          <Col span={24}>
            <Form.Item label="Nomi" name="title" rules={[{ required: true }]}>
              <Input placeholder="Taxta, temir, ichimlik..." />
            </Form.Item>
          </Col>

          {/* Weight */}
          <Col span={12}>
            <Form.Item
              label="Og'irligi"
              name="weight"
              rules={[{ required: true }]}
            >
              <Input type="number" addonAfter="tonna" inputMode="numeric" />
            </Form.Item>
          </Col>

          {/* Capacity */}
          <Col span={12}>
            <Form.Item label="Hajmi" name="capacity">
              <Input type="number" addonAfter="m³" inputMode="numeric" />
            </Form.Item>
          </Col>

          {/* Vehicle Type */}
          <Col span={12}>
            <Form.Item
              label="Transport turi"
              name="vehicleType"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>

          {/* Vehicle Body Type */}
          <Col span={12}>
            <Form.Item label="Pritsep turi" name="vehicleBodyType">
              <Input />
            </Form.Item>
          </Col>

          {/* Payment Type */}
          <Col span={12}>
            <Form.Item label="To'lov turi" name="paymentType">
              <Select
                showSearch
                options={[
                  { value: "cash", label: "Naqd" },
                  { value: "online", label: "Onlayn" },
                  { value: "combo", label: "Kombo" },
                ]}
              />
            </Form.Item>
          </Col>

          {/* Payment Amount */}
          <Col span={9}>
            <Form.Item label="To'lov summasi" name="paymentAmount">
              <Input type="number" inputMode="numeric" />
            </Form.Item>
          </Col>

          {/* Payment Currency */}
          <Col span={3}>
            <Form.Item label="Valyuta" name="paymentCurrency">
              <Select options={currencyOptions} />
            </Form.Item>
          </Col>

          {/* Pickup Date */}
          <Col span={12}>
            <Form.Item
              label="Yuklash vaqti"
              name="pickupDate"
              rules={[{ required: true }]}
            >
              <Input type="date" />
            </Form.Item>
          </Col>

          {/* Phone */}
          <Col span={12}>
            <Form.Item
              label="Broker raqami"
              name="phone_number"
              rules={[
                { required: true },
                { len: 9, message: "Phone number must be 9 digits" },
              ]}
            >
              <Input addonBefore="+998" maxLength={9} />
            </Form.Item>
          </Col>

          {/* Description */}
          <Col span={24}>
            <Form.Item label="Qo'shimcha ma'lumot" name="description">
              <Input.TextArea allowClear />
            </Form.Item>
          </Col>

          {/* Buttons */}
          <Col span={8}>
            <Button type="dashed" onClick={handleReset} className="w-full">
              Reset
            </Button>
          </Col>

          <Col span={16}>
            <Button type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Col>
        </Row>
      </Spin>
    </Form>
  );
};
