import React, { useState } from "react";
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

const CreateProduct = () => {
  const brands = [
    "Jack Daniels",
    "Budweiser",
    "Brahma",
    "Coca-Cola",
    "Drehen",
    "Baileys",
    "Bacardi",
  ];

  const handleSubmit = () => {
    console.log("Submitted");
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
      [prop]: [value],
    });
  };

  const [info, setInfo] = useState({
    name: "",
    img: "",
    price: "",
    capacity: "",
    minimum_amount_for_bulk: "",
    bulk_discount: "",
    stock: "",
    rating: "",
    has_discount: false,
    brand: [],
    category: [],
    subcategory: [],
  });

  console.log(info); 

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
        <TextInput
          type="number"
          name="rating"
          placeholder="Calificación"
          min='1'
          max='5'
          value={info.rating}
          onChange={(e) => handleChange(e)}
        />
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
          {brands.map((e) => {
            return <option key={e}>{e}</option>;
          })}
        </Selector>
        <Selector name="category" onChange={(e) => handleSelect(e)}>
          <option hidden>Categoría</option>
          {brands.map((e) => {
            return <option key={e}>{e}</option>;
          })}
        </Selector>
        <Selector name="subcategory" onChange={(e) => handleSelect(e)}>
          <option hidden>Sub-Categoría</option>
          {brands.map((e) => {
            return <option key={e}>{e}</option>;
          })}
        </Selector>
      </BrandContainer>
      <BrandContainer>
        <SubmitButton onClick={() => handleSubmit()}>Crear</SubmitButton>
      </BrandContainer>
    </FormContainer>
  );
};

export default CreateProduct;