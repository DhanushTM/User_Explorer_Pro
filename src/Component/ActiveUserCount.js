import React from "react";
import { useSelector } from "react-redux";
import { selectActiveUsers } from "../Features/userSlice";

const ActiveUserCount = () => {
  const activeUsers = useSelector(selectActiveUsers);

  return <div>Active Users Count: {activeUsers.length}</div>;
};

export default ActiveUserCount;
