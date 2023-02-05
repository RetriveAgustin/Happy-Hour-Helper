import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  getAllCategories,
  getAllSubCategories,
  getAllBrands,
} from "./../../redux/actions/actions";
import axios from "axios";

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
    ) {
      dispatch(createProduct(info));
      alert("El producto ha sido creado");
      setInfo({
        name: "",
        img: "",
        price: "",
        capacity: "",
        stock: "",
        has_discount: false,
        brand: "",
        category: "",
        subcategory: "",
      });
    } else {
      alert("Producto no creado");
    }
  };

  const handleChange = (e) => {
    const prop = e.target.name;
    const value = e.target.value;
    setInfo({
      ...info,
      [prop]: value,
    });
  };

  const imageUpload = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "hhhupload");
    axios
      .post("https://api.cloudinary.com/v1_1/dprhkqxon/image/upload", formData)
      .then((response) =>
        setInfo({
          ...info,
          img: response.data.secure_url,
        })
      )
      .catch((err) => console.log(err));
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

  const subs = subCategories?.filter(
    (sub) => sub.category_id === info.category
  );

  return (
    <FormContainer>
      <ColumnFieldContainer>
        <h5 style={{ color: "white", fontSize: "2rem", alignText: "center" }}>
          Crea un producto
        </h5>
        <p style={{ color: "white" }}>Los campos con * son obligatorios</p>
        <TextInput
          type="text"
          name="name"
          placeholder="Nombre*"
          value={info.name}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          type="file"
          name="img"
          placeholder="Imagen"
          onChange={(e) => imageUpload(e.target.files)}
        ></TextInput>
        <TextInput
          type="number"
          name="price"
          placeholder="Precio*"
          step="0.01"
          value={info.price}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          type="number"
          name="capacity"
          placeholder="Capacidad*"
          value={info.capacity}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          type="number"
          name="stock"
          placeholder="Stock"
          value={info.stock}
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
        <span style={{ color: "white" }}>*</span>
        <Selector name="brand" onChange={(e) => handleSelect(e)}>
          <option hidden>Marca</option>
          {brandsState.map((brand) => {
            return <option value={brand.id}>{brand.name}</option>;
          })}
        </Selector>
        <span style={{ color: "white" }}>*</span>
        <Selector name="category" onChange={(e) => handleSelect(e)}>
          <option hidden>Categoría</option>
          {categories.map((cat) => {
            return <option value={cat.id}>{cat.name}</option>;
          })}
        </Selector>
        <span style={{ color: "white" }}>*</span>
        <Selector
          name="subcategory"
          style={
            info.category
              ? { background: "white", color: "black" }
              : {
                  background: "grey",
                  border: "grey",
                  color: "#45454b",
                  fontStyle: "italic",
                }
          }
          onChange={(e) => handleSelect(e)}
        >
          <option hidden>Sub-Categoría</option>
          {subs.map((sub) => {
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
