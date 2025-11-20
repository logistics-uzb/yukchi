import { loadPostFields } from "@widgets/load-post";
import type { TableProps } from "antd";
import { Button, Space } from "antd";

type LoadPostRecord = Record<string, unknown>;

// Base columns from form fields
const baseColumns: TableProps<LoadPostRecord>["columns"] = loadPostFields().map(
  ({ label, name }) => ({
    title: label,
    dataIndex: name,
    key: name,
  })
);

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
