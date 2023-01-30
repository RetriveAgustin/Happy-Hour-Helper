import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LiquorIcon from "@mui/icons-material/Liquor";
import DiscountIcon from "@mui/icons-material/Discount";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const DrawerContainer = styled.nav`
  display: flex;
  flex-direction: column;
  color: white;
  position: relative;
  left: 0;
  background-color: #52373c;
  width: 20vw;
  height: 100vh;
  border-right: 3px solid #2b1c1f;
`;

function DrawerComponent() {
  const navigate = useNavigate();
  const dashboardSettings = [
    {
      name: "Users",
      icon: <PersonIcon style={{ color: "#ffffff" }} />,
      link: "/admin/users",
    },
    {
      name: "Products",
      icon: <LiquorIcon style={{ color: "#ffffff" }} />,
      link: "/admin/products",
    },
    // { name: "Offers", icon: <DiscountIcon style={{ color: "#ffffff" }} /> },
  ];
  const createSettings = [{ name: "Create Product", link: "/createproduct" }];
  return (
    <>
      <DrawerContainer>
        <List>
          {dashboardSettings.map((e) => (
            <ListItem key={e.name} disablePadding>
              <ListItemButton onClick={() => navigate(e.link)}>
                <ListItemIcon>{e.icon}</ListItemIcon>
                <ListItemText primary={e.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography>Create</Typography>
        <List>
          {createSettings.map((e) => (
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate(e.link)}>
                <ListItemIcon>
                  <AddIcon style={{ color: "#ffffff" }} />
                  <ListItemText primary={e.name} style={{ color: "#ffffff" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemIcon>
                <LogoutIcon style={{ color: "#ffffff" }} />
              </ListItemIcon>
              <ListItemText primary={"Quit Dashboard"} />
            </ListItemButton>
          </ListItem>
        </List>
      </DrawerContainer>
    </>
  );
}

export default DrawerComponent;
