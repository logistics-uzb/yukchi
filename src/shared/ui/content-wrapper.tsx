import { Typography } from "antd";
import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export const ContentWrapper = ({ title, children }: Props) => {
  return (
    <div className="w-full" style={{ margin: "20px" }}>
      <Typography.Title level={3}>{title}</Typography.Title>
      {children}
    </div>
  );
};
