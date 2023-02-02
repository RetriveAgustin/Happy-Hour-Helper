import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import DrawerComponent from "./drawer/Drawer";
import UsersDashboard from "./users/UserDashboard";

const AdminDashboardContainer = styled.div`
  display: flex;
  width: 100vw;
`;

function AdminDashboard({ props }) {
  return (
    <AdminDashboardContainer>
      <DrawerComponent />
      {props}
    </AdminDashboardContainer>
  );
}

export default AdminDashboard;
