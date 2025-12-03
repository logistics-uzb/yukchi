import { Button, Col, Form, Row, Spin, Typography, Input, Select } from "antd";
import { currencyOptions } from "@shared/model/consts";
import { countries } from "@shared/model/consts/countries";
import { usePostLoadMutation } from "@entities/post-load";
import { useCallback } from "react";
import { getLocalStorage } from "@shared/model/helpers";
import { CARGO_UNIT_OPTIONS } from "../model/consts";
import { useWatch } from "antd/es/form/Form";
import type { IBaseLoad } from "@shared/model/types";

export const LoadPostForm = () => {
  const [form] = Form.useForm<IBaseLoad>();
  const [postLoad, { isLoading }] = usePostLoadMutation();
  const userPhoneNumber = getLocalStorage("phone_number");

  const initialValues: Partial<IBaseLoad> = {
    phone_number: userPhoneNumber?.slice(4) || "",
    paymentCurrency: "usd",
    cargoUnit: "tons",
  };

  const cargoUnitValue = useWatch("cargoUnit", form);

  const handleSubmit = async () => {
    const values = form.getFieldsValue();
    console.log(values);
    const transformedValues = {
      ...values,
      phone_number: `+998${values.phone_number}`,
    };

    try {
      const response = await postLoad(transformedValues).unwrap();
      console.log(response);
    } catch (error: any) {
      console.error("Submit failed:", error);
    } finally {
      form.resetFields();
    }
  };

  const handleReset = useCallback(() => {
    form.resetFields();
  }, [form]);

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues}
      onFinish={handleSubmit}
      className="w-full max-w-[900px] mx-auto"
    >
      <Typography.Title level={3} className="text-center">
        Yuk yuborish
      </Typography.Title>

      <Spin spinning={isLoading}>
        <Row gutter={[16, 16]}>
          {/* From Country */}
          <Col xs={24} sm={12} md={8} lg={6}>
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
          <Col xs={24} sm={12} md={8} lg={6}>
            <Form.Item
              label="Qaysi viloyatdan"
              name="regionFrom"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>

          {/* To Country */}
          <Col xs={24} sm={12} md={8} lg={6}>
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
          <Col xs={24} sm={12} md={8} lg={6}>
            <Form.Item
              label="Qaysi viloyatdan"
              name="regionTo"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>

          {/* Title */}
          <Col xs={24}>
            <Form.Item label="Nomi" name="title" rules={[{ required: true }]}>
              <Input placeholder="Taxta, temir, ichimlik..." />
            </Form.Item>
          </Col>

          {/* Weight */}
          <Col xs={24} sm={12} md={cargoUnitValue === "pallet" ? 12 : 8}>
            <Form.Item
              label="Og'irligi"
              name="weight"
              rules={[{ required: true }]}
            >
              <Input type="number" inputMode="numeric" />
            </Form.Item>
          </Col>

          {/* Cargo Unit */}
          <Col xs={24} sm={12} md={cargoUnitValue === "pallet" ? 12 : 4}>
            <Form.Item
              label="Tonna/Poddon"
              name="cargoUnit"
              rules={[{ required: true }]}
            >
              <Select options={CARGO_UNIT_OPTIONS} />
            </Form.Item>
          </Col>

          {/* Capacity */}
          {cargoUnitValue === "tons" && (
            <Col xs={24} sm={12} md={12}>
              <Form.Item label="Hajmi" name="capacity">
                <Input type="number" addonAfter="m³" inputMode="numeric" />
              </Form.Item>
            </Col>
          )}

          {/* Vehicle Type */}
          <Col xs={24} sm={12}>
            <Form.Item
              label="Transport turi"
              name="vehicleType"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>

          {/* Vehicle Body Type */}
          <Col xs={24} sm={12}>
            <Form.Item label="Pritsep turi" name="vehicleBodyType">
              <Input />
            </Form.Item>
          </Col>

          {/* Payment Type */}
          <Col xs={24} sm={12}>
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
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="To'lov summasi" name="paymentAmount">
              <Input type="number" inputMode="numeric" />
            </Form.Item>
          </Col>

          {/* Payment Currency */}
          <Col xs={24} sm={12} md={4}>
            <Form.Item label="Valyuta" name="paymentCurrency">
              <Select options={currencyOptions} />
            </Form.Item>
          </Col>

          {/* Pickup Date */}
          <Col xs={24} sm={12}>
            <Form.Item
              label="Yuklash vaqti"
              name="pickupDate"
              rules={[{ required: true }]}
            >
              <Input type="date" />
            </Form.Item>
          </Col>

          {/* Phone Number */}
          <Col xs={24} sm={12}>
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
          <Col xs={24}>
            <Form.Item label="Qo'shimcha ma'lumot" name="description">
              <Input.TextArea allowClear />
            </Form.Item>
          </Col>

          {/* Buttons */}
          <Col xs={24} sm={8}>
            <Button type="dashed" onClick={handleReset} className="w-full">
              Reset
            </Button>
          </Col>

          <Col xs={24} sm={16}>
            <Button type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Col>
        </Row>
      </Spin>
    </Form>
  );
};
