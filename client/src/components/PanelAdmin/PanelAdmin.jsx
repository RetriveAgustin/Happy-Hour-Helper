import React from "react";
import {
  AdminNavContainer,
  NavButton,
  PrevButton,
  UserImage,
  UserInfo,
} from "./PanelAdmin.styles";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";

const PanelAdmin = () => {
  const navigate = useNavigate();
  return (
    <AdminNavContainer>
      <PrevButton>
        <ArrowBackIos color="inherit" onClick={() => navigate(`/admin`)} />
      </PrevButton>
      <UserInfo>
        <UserImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTgK1EYhwitE3CCCdbK1bNwFIu-vo2B5dnA&usqp=CAU" />
        <h1>Admin</h1>
      </UserInfo>

      <Link to="/admin">
        <NavButton>Users</NavButton>
      </Link>

      <Link to="/admin/products">
        <NavButton>Products</NavButton>
      </Link>

      <Link to="/admin/offers">
        <NavButton>Offers</NavButton>
      </Link>
    </AdminNavContainer>
  );
};

export default PanelAdmin;
