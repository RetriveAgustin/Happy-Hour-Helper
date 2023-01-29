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
import { useNavigate } from "react-router-dom";

const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  background-color: #2b1c1f;
  width: 20vw;
  height: 100vh;
  border-right: 3px solid gray;
`;

function DrawerComponent() {
  const navigate = useNavigate();
  const dashboardSettings = [
    {
      name: "Users",
      icon: <PersonIcon style={{ color: "#ffffff" }} />,
      link: "/admin",
    },
    {
      name: "Products",
      icon: <LiquorIcon style={{ color: "#ffffff" }} />,
      link: "/adminProduct",
    },
    { name: "Offers", icon: <DiscountIcon style={{ color: "#ffffff" }} /> },
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
      </DrawerContainer>
    </>
  );
}

export default DrawerComponent;
