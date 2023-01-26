import React, { useEffect } from "react";
import {
  AdminPageContainer,
  ContainerDashboard,
  Div
} from "./AdminOffers.styles";
import CardInfo from "../../components/CardInfo/CardInfo";
import { useDispatch, useSelector } from "react-redux";
import { getAllOffers } from "../../redux/actions/actions";
import PanelAdmin from "../../components/PanelAdmin/PanelAdmin";

const AdminOffers = () => {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers);

  useEffect(() => {
    dispatch(getAllOffers())
  }, [dispatch])
  return (
    <>
      <AdminPageContainer>
        <PanelAdmin />
        <Div>
          <ContainerDashboard>
            <CardInfo type="offers" />
            {offers.map((e) => (
              <CardInfo props={e} type="offers" />
            ))}
          </ContainerDashboard>
        </Div>
      </AdminPageContainer>
    </>
  );
}

export default AdminOffers;