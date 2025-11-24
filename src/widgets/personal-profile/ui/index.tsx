import { Avatar, Popover } from "antd";

export const PersonalProfile = () => {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <Popover content={content} title="Title" trigger="click">
      <Avatar
        src="https://joeschmoe.io/api/v1/random"
        className="cursor-pointer select-none"
      >
        UM
      </Avatar>
    </Popover>
  );
};
