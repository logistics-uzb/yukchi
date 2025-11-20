import { loadPostColumns } from "@widgets/loads";
import { Table } from "antd";

export const Loads = () => {
  const dataSource = [
    {
      key: "1",
      from: "Tashkent",
      to: "Samarkand",
      title: "Furniture Delivery",
      weight: 2,
      vehicleType: "Car",
      vehicleBodyType: "Sedan",
      paymentType: "Cash",
      paymentAmount: 200,
      paymentCurrency: "USD",
      pickupDate: "2025-11-01",
      pickupTime: "10:00",
      description: "Urgent delivery",
      phone_number: "991234567",
    },
  ];
  return <Table dataSource={dataSource} columns={loadPostColumns} />;
};
