import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  getAllCategories,
  getAllSubCategories,
  getAllBrands,
} from "./../../redux/actions/actions";

import {
  FormContainer,
  ColumnFieldContainer,
  TextInput,
  CheckBox,
  CheckContainer,
  NumInput,
  Selector,
  BrandContainer,
  SubmitButton,
} from "./CreateProduct.styles";

export default function CreateProduct() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllBrands());
    dispatch(getAllSubCategories());
  }, [dispatch]);
  const brandsState = useSelector((state) => state.root.brands);
  const categories = useSelector((state) => state.root.categories);
  const subCategories = useSelector((state) => state.root.subCategories);

  const [info, setInfo] = useState({
    name: "",
    img: "",
    price: "",
    capacity: "",
    minimum_amount_for_bulk: "",
    bulk_discount: "",
    stock: "",
    has_discount: false,
    brand: "",
    category: "",
    subcategory: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      info.name &&
      info.price &&
      info.capacity &&
      info.brand &&
      info.category &&
      info.subcategory
    )
      dispatch(createProduct(info));
    alert("El producto ha sido creado");
    setInfo({
      name: "",
      img: "",
      price: "",
      capacity: "",
      minimum_amount_for_bulk: "",
      bulk_discount: "",
      stock: "",
      has_discount: false,
      brand: "",
      category: "",
      subcategory: "",
    });
  };

  const handleChange = (e) => {
    const prop = e.target.name;
    const value = e.target.value;
    setInfo({
      ...info,
      [prop]: value,
    });
  };

  const handleCheck = (e) => {
    const check = e.target.checked;
    check
      ? setInfo({
          ...info,
          has_discount: true,
        })
      : setInfo({
          ...info,
          has_discount: false,
        });
  };

  const handleSelect = (e) => {
    const prop = e.target.name;
    const value = e.target.value;
    if (!value) {
      return;
    }
    setInfo({
      ...info,
      [prop]: value,
    });
  };

  return (
    <FormContainer>
      <ColumnFieldContainer>
        <h5 style={{ color: "white", fontSize: "2rem", alignText: "center" }}>
          Crea un producto
        </h5>
        <TextInput
          type="text"
          name="name"
          placeholder="Nombre"
          value={info.name}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          type="text"
          name="img"
          placeholder="Imagen"
          value={info.img}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          type="number"
          name="price"
          placeholder="Precio"
          step="0.01"
          value={info.price}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          type="number"
          name="capacity"
          placeholder="Capacidad"
          value={info.capacity}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          type="number"
          name="minimum_amount_for_bulk"
          placeholder="Cantidad mínima en bulk"
          value={info.minimum_amount_for_bulk}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          type="number"
          name="bulk_discount"
          step="0.01"
          placeholder="Descuento en bulk"
          value={info.bulk_discount}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          type="number"
          name="stock"
          placeholder="Stock"
          value={info.stock}
          onChange={(e) => handleChange(e)}
        />
        {/* <TextInput
          type="number"
          name="rating"
          placeholder="Calificación"
          min='1'
          max='5'
          value={info.rating}
          onChange={(e) => handleChange(e)}
        /> */}
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <CheckContainer>
            <h3 style={{ color: "white" }}>¿Descuento?</h3>
            <CheckBox
              type="checkbox"
              value={info.has_discount}
              onClick={(e) => handleCheck(e)}
            />
          </CheckContainer>
          <CheckContainer>
            <h3 style={{ color: "white" }}>¿Cuánto?</h3>
            <NumInput type="number" />
            <h4 style={{ color: "white" }}>%</h4>
          </CheckContainer>
        </div>
      </ColumnFieldContainer>
      <BrandContainer>
        <Selector name="brand" onChange={(e) => handleSelect(e)}>
          <option hidden>Marca</option>
          {brandsState.map((brand) => {
            return <option value={brand.id}>{brand.name}</option>;
          })}
        </Selector>
        <Selector name="category" onChange={(e) => handleSelect(e)}>
          <option hidden>Categoría</option>
          {categories.map((cat) => {
            return <option value={cat.id}>{cat.name}</option>;
          })}
        </Selector>
        <Selector name="subcategory" onChange={(e) => handleSelect(e)}>
          <option hidden>Sub-Categoría</option>
          {subCategories.map((sub) => {
            return <option value={sub.id}>{sub.name}</option>;
          })}
        </Selector>
      </BrandContainer>
      <BrandContainer>
        <SubmitButton onClick={(e) => handleSubmit(e)}>Crear</SubmitButton>
      </BrandContainer>
    </FormContainer>
  );
}
