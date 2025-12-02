import { getInitials } from "@shared/model/helpers";
import { Avatar, Button, Divider } from "antd";
import { useNavigate } from "react-router";

interface Props {
  fullName: string;
  number: string;
  username: string;
}

export const Modal = ({ fullName, username, number }: Props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="flex flex-col items-center text-center">
      <Avatar size={50} className="">
        {getInitials(fullName)}
      </Avatar>

      <h3 className="text-lg font-semibold">{fullName}</h3>
      <p className="text-gray-500">{number}</p>
      <p className="text-gray-500">@{username}</p>

      <Divider />

      <Button type="primary" block onClick={handleLogout}>
        Chiqish
      </Button>
    </div>
  );
};
