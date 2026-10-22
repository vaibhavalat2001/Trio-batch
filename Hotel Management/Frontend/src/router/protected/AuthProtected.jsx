import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const AuthProtected = () => {
  const { user } = useSelector((store) => store.auth);

  if (user) {
    <Navigate to="/main" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthProtected;
