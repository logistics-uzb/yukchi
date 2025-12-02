import { useGetUserInfoQuery } from "@entities/login";
import { useDeleteLoadMutation, useGetLoadsQuery } from "@entities/post-load";
import type { ILoadResponse } from "@shared/model/types";
import { useLoadPostColumns } from "@widgets/loads";
import { notification, Table } from "antd";

export const Loads = () => {
  // Mutations
  const [deleteLoad, { isLoading: deleteLoading }] = useDeleteLoadMutation();

  const { data: userInfo, isLoading: userInfoLoading } = useGetUserInfoQuery(
    {}
  );

  const { data, isLoading } = useGetLoadsQuery(
    {
      username: userInfo?.username || "",
    },
    {
      skip: !userInfo,
    }
  );

  const loads = data?.data;

  const handleDeleteLoad = async (load: ILoadResponse) => {
    try {
      console.log("hellow");

      await deleteLoad(load._id).unwrap();
      notification.success({
        message: "Muvaffaqiyatli",
        description: "Yuk muvaffaqiyatli o'chirildi",
      });
    } catch (error: any) {
      console.error("Delete failed:", error);
    }
  };
  const { columns } = useLoadPostColumns({
    onEdit: (record) => console.log("Edit: ", record),
    onDelete: (record) => handleDeleteLoad(record),
  });

  return (
    <Table
      dataSource={loads}
      columns={columns}
      loading={isLoading || userInfoLoading || deleteLoading}
    />
  );
};
