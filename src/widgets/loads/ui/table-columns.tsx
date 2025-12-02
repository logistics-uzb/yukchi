import type { TableProps } from "antd";
import { Button, Space } from "antd";

type LoadPostRecord = Record<string, unknown>;

// Base columns from form fields
const baseColumns: TableProps<LoadPostRecord>["columns"] = [
  {
    title: "Nomi",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Og'irligi (tonna)",
    dataIndex: "weight",
    key: "weight",
  },
  {
    title: "Hajmi (м³)",
    dataIndex: "capacity",
    key: "capacity",
  },
  {
    title: "Transport",
    dataIndex: "vehicleType",
    key: "vehicleType",
  },
  {
    title: "Pritsep",
    dataIndex: "vehicleBodyType",
    key: "vehicleBodyType",
  },
  {
    title: "To'lov turi",
    dataIndex: "paymentType",
    key: "paymentType",
  },
  {
    title: "To'lov summasi",
    dataIndex: "paymentAmount",
    key: "paymentAmount",
  },
  {
    title: "Yuklash vaqti",
    dataIndex: "pickupDate",
    key: "pickupDate",
  },
  {
    title: "Telefon raqami",
    dataIndex: "phone_number",
    key: "phone_number",
  },
  {
    title: "Tavsifi",
    dataIndex: "description",
    key: "description",
  },
];
export const loadPostColumns: TableProps<LoadPostRecord>["columns"] = [
  {
    title: "№",
    key: "index",
    render: (_: unknown, __: LoadPostRecord, index: number) => index + 1,
    width: 60,
    align: "center",
  },
  ...baseColumns,
  {
    title: "Manage",
    key: "manage",
    fixed: "right",
    width: 150,
    render: (_: unknown, record: LoadPostRecord) => (
      <Space>
        <Button type="link" onClick={() => console.log("Edit", record)}>
          Edit
        </Button>
        <Button
          type="link"
          danger
          onClick={() => console.log("Delete", record)}
        >
          Delete
        </Button>
      </Space>
    ),
  },
];
