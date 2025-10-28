import { Input, Select } from "antd";
import { currencyOptions, uzbRegions } from "@shared/model/consts";

const vehicleTypes = [
  { value: "car", label: "Car" },
  { value: "motorcycle", label: "Motorcycle" },
];

const vehicleBodyTypes = [
  { value: "sedan", label: "Sedan" },
  { value: "hatchback", label: "Hatchback" },
  { value: "suv", label: "SUV" },
  { value: "truck", label: "Truck" },
];

const paymentTypes = [
  { value: "cash", label: "Cash" },
  { value: "online", label: "Online" },
];

export const loadPostFields = (fromValue?: string, toValue?: string) => [
  {
    span: 12,
    label: "From",
    name: "from",
    rules: [{ required: true }],
    render: (
      <Select
        placeholder="Select region"
        options={uzbRegions.filter((r) => r.value !== toValue)}
      />
    ),
  },
  {
    span: 12,
    label: "To",
    name: "to",
    rules: [{ required: true }],
    render: (
      <Select
        placeholder="Select region"
        options={uzbRegions.filter((r) => r.value !== fromValue)}
      />
    ),
  },
  {
    span: 12,
    label: "Title",
    name: "title",
    rules: [{ required: true }],
    render: <Input />,
  },
  {
    span: 12,
    label: "Weight",
    name: "weight",
    rules: [{ required: true }],
    render: <Input type="number" addonAfter="tons" />,
  },
  {
    span: 12,
    label: "Vehicle Type",
    name: "vehicleType",
    rules: [{ required: true }],
    render: <Select options={vehicleTypes} />,
  },
  {
    span: 12,
    label: "Vehicle Body Type",
    name: "vehicleBodyType",
    rules: [{ required: true }],
    render: <Select options={vehicleBodyTypes} />,
  },
  {
    span: 12,
    label: "Payment Type",
    name: "paymentType",
    rules: [{ required: true }],
    render: <Select options={paymentTypes} />,
  },
  {
    span: 9,
    label: "Payment",
    name: "paymentAmount",
    rules: [{ required: true }],
    render: <Input type="number" placeholder="Amount" />,
  },
  {
    span: 3,
    label: "Currency",
    name: "paymentCurrency",
    rules: [{ required: true }],
    render: <Select options={currencyOptions} />,
  },
  {
    span: 12,
    label: "Pickup Date",
    name: "pickupDate",
    rules: [{ required: true }],
    render: <Input type="date" />,
  },
  {
    span: 12,
    label: "Pickup Time",
    name: "pickupTime",
    rules: [{ required: true }],
    render: <Input type="time" />,
  },
  {
    span: 12,
    label: "Description",
    name: "description",
    render: <Input.TextArea allowClear />,
  },
  {
    span: 12,
    label: "Phone Number",
    name: "phone_number",
    rules: [
      { required: true },
      { len: 9, message: "Phone number must be 9 digits" },
    ],
    render: <Input addonBefore="+998" maxLength={9} />,
  },
];
