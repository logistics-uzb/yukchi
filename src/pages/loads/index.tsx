import { useGetLoadsQuery } from "@entities/post-load";
import { loadPostColumns } from "@widgets/loads";
import { Table } from "antd";

export const Loads = () => {
  const { data, isLoading } = useGetLoadsQuery({
    username: "admin",
  });

  const loads = data?.data;

  return (
    <Table dataSource={loads} columns={loadPostColumns} loading={isLoading} />
  );
};
