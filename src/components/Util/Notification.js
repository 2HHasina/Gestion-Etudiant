import React from "react";
import "antd/dist/antd.css";
import { notification} from "antd";
import {
    CheckCircleTwoTone
} from "@ant-design/icons";

const Notification = (props) => {
    const {label} = props
    notification.open({
      message: `${label} Added`,
      icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
    });
  };
  

export default Notification;
