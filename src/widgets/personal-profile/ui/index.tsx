import { Avatar, Popover } from "antd";
import { Modal } from "./modal";
import { getInitials } from "@shared/model/helpers";

export const PersonalProfile = () => {
  return (
    <Popover
      arrow={false}
      content={
        <Modal
          username="umirzakov"
          fullName="Umirzakov Muhammadyosin"
          number="993002399"
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
