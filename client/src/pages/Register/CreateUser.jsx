// import React, { useState } from "react";
// import { useAuth } from "../../context/authContext";
// import { Label, Container, Input, Title, Form, P1, Wrapper, Button } from "./index.styles";

// const CreateUser = () => {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const { signup } = useAuth();

//   const [error, setError] = useState();

//   const handleChange = ({ target: { name, value } }) => {
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await signup(user.email, user.password);
      
//     } catch (error) {
//       setError(error.message);
//     }
//   }; 

//   return (
//     <Container>
//       <Wrapper>
//       <Title>Crear Usuario</Title>
//       {error && <P1>{error}</P1>}
//       <Form onSubmit={handleSubmit}>
//         <Label>
//           Email:
//           <Input
//             placeholder="example@mail.com"
//             type="email"
//             name="email"
//             value={user.email}
//             onChange={handleChange}
//             required
//           />
//         </Label>
//         <Label>
//           Contraseña:
//           <Input
//             placeholder="contraseña"
//             type="password"
//             name="password"
//             value={user.password}
//             onChange={handleChange}
//             required
//           />
//         </Label>
//         <Button onClick={handleSubmit}>Crear</Button>
//       </Form>
//       </Wrapper>
//     </Container>
//   );
// };

// export default CreateUser;
