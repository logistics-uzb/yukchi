import { LoadPost } from "@pages/load-post";
import { FileDoneOutlined, PlusOutlined } from "@ant-design/icons";
import { Loads } from "@pages/loads";

export const ALL_ROUTES = [
  {
    path: "/",
    element: <Loads />,
    title: "Loads",
    icon: <FileDoneOutlined />,
  },
  {
    path: "/load-post",
    element: <LoadPost />,
    title: "Create load",
    icon: <PlusOutlined />,
  },
];
