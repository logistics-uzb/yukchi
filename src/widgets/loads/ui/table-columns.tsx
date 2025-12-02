/* eslint-disable react-hooks/exhaustive-deps */
import type { ILoadResponse } from "@shared/model/types";
import type { TableProps } from "antd";
import { Button, Space } from "antd";
import { useMemo } from "react";

type LoadPostRecord = ILoadResponse;

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

export const useLoadPostColumns = (props?: {
  onEdit?: (record: ILoadResponse) => void;
  onDelete?: (record: ILoadResponse) => void;
}) => {
  const { onEdit, onDelete } = props || {};

  const columns: TableProps<LoadPostRecord>["columns"] = useMemo(() => {
    return [
      {
        title: "№",
        key: "index",
        width: 60,
        align: "center",
        render: (_: unknown, __: LoadPostRecord, index: number) => index + 1,
      },

      // include your shared columns
      ...baseColumns,

      {
        title: "Boshqarish",
        key: "manage",
        fixed: "right",
        width: 150,
        render: (_: unknown, record: ILoadResponse) => (
          <Space>
            {/* <Button type="link" onClick={() => onEdit?.(record)}>
              O'zgartirish
            </Button> */}

            <Button type="link" danger onClick={() => onDelete?.(record)}>
              O'chirish
            </Button>
          </Space>
        ),
      },
    ];
  }, [onEdit, onDelete]);

  return { columns };
};
