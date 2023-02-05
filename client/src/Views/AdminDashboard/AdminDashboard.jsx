import React from "react";
import styled from "styled-components";
import DrawerComponent from "./drawer/Drawer";

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
