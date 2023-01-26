import React, { useEffect } from "react";
import {
  AdminPageContainer,
  ContainerDashboard,
  Div,
} from "./AdminProducts.styles";
import CardInfo from "../../components/CardInfo/CardInfo";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import PanelAdmin from "../../components/PanelAdmin/PanelAdmin";

const AdminProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <>
      <AdminPageContainer>
        <PanelAdmin />
        <Div>
          <ContainerDashboard>
            <CardInfo type="products" />
            {products.map((p) => (
              <CardInfo props={p} type="products" />
            ))}
          </ContainerDashboard>
        </Div>
      </AdminPageContainer>
    </>
  );
};

export default AdminProducts;
