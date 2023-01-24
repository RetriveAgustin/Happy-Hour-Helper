import React, { useEffect } from "react";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import {
  AdminNavContainer,
  NavButton,
  PrevButton,
  UserImage,
  UserInfo,
  AdminPageContainer,
  DashboardContainer
} from "./AdminDashboard.styles";
import styled from "styled-components";
import CardInfo from "../../components/CardInfo/CardInfo";
import { useDispatch, useSelector } from "react-redux";
import { getAllOffers } from "../../redux/actions/actions";
import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <AdminPageContainer>
        <AdminNavContainer>
          <PrevButton>
          <ArrowBackIos color="inherit" onClick={() => navigate(`/`)}/>
          </PrevButton>
          <UserInfo>
            <UserImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTgK1EYhwitE3CCCdbK1bNwFIu-vo2B5dnA&usqp=CAU" />
            <h1>Admin</h1>
          </UserInfo>

          <Link to="/admin/users">
            <NavButton>Users</NavButton>
          </Link>

          <Link to="/admin/products">
            <NavButton>Products</NavButton>
          </Link>

          <Link to="/admin/offers">
            <NavButton>Offers</NavButton>
          </Link>
        </AdminNavContainer>
        <DashboardContainer>
          {/* {products.map((e) => (
            <CardInfo props={e} />
          ))} */}
        </DashboardContainer>
      </AdminPageContainer>
    </>
  );
}

export default AdminDashboard;
