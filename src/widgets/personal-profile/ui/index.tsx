import { Avatar, Popover } from "antd";
import { Modal } from "./modal";
import { getInitials } from "@shared/model/helpers";
import { useGetUserInfoQuery } from "@entities/login";

export const PersonalProfile = () => {
  const { data } = useGetUserInfoQuery({});
  const { username, full_name, phone_number } = data || {};

  return (
    <Popover
      arrow={false}
      content={
        <Modal
          username={username || ""}
          fullName={full_name || ""}
          number={phone_number || ""}
        />
      }
      trigger="click"
    >
      <Avatar className="cursor-pointer select-none">
        {getInitials("Umirzakov Muhammadyosin")}
      </Avatar>
    </Popover>
  );
};
