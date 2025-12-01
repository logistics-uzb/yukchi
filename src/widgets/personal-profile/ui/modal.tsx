import { getInitials } from "@shared/model/helpers";
import { Avatar } from "antd";

interface Props {
  fullName: string;
  number: string;
  username: string;
}

export const Modal = ({ fullName, username, number }: Props) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Avatar size={50} className="">
        {getInitials(fullName)}
      </Avatar>

      <h3 className="text-lg font-semibold">{fullName}</h3>
      <p className="text-gray-500">{number}</p>
      <p className="text-gray-500">@{username}</p>

      {/* <Divider />

      <Button type="primary" block>
        Edit Profile
      </Button> */}
    </div>
  );
};
