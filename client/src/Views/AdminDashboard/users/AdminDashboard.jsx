import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import {
  DashboardInfoContainer,
  DataOutput,
  FilterInput,
  HeaderContainer,
  SearchBarContainer,
  SearchBarInput,
  SearchButton,
} from "./AdminDashboard.styles";

//  ---IMPORTANTE---
//  Despues reemplazar el estado "UserInfo" por los usuarios traidos desde el back en el UseEffect.
//  Eliminar la variable "users"
//  Si despues es necesario modificar algun estilo, se encuentran todos en el archivo "./AdminDashboard.styles.js"

function AdminDashboardUsers() {
  const [UserInfo, setUserInfo] = useState([]);
  const [searchValues, setSearchValues] = useState({
    value: "",
    filter: "first_name",
  });
  const [isActive, setIsActive] = useState(false);

  const users = [
    {
      id: "01GQMHQBV4A3EGH203076SZK12",
      first_name: "Dwayne",
      last_name: "Braiden",
      email: "dbraiden0@dedecms.com",
    },
    {
      id: "01GQMHQBV6JTVP6AA01Q0F1WY8",
      first_name: "Margi",
      last_name: "Gothard",
      email: "mgothard1@themeforest.net",
    },
    {
      id: "01GQMHQBV85PT2B5083TANA45G",
      first_name: "Ignaz",
      last_name: "Kondratovich",
      email: "ikondratovich2@jugem.jp",
    },
    {
      id: "01GQMHQBVAA85TCN525RBK2NG3",
      first_name: "Hubert",
      last_name: "Chretien",
      email: "hchretien3@quantcast.com",
    },
    {
      id: "01GQMHQBVC99640ZK952RGV1E5",
      first_name: "Theressa",
      last_name: "Lyenyng",
      email: "tlyenyng4@geocities.com",
    },
    {
      id: "01GQMHQBVECF5G0NNV1J1WNBJR",
      first_name: "Glen",
      last_name: "Di Domenico",
      email: "gdidomenico5@thetimes.co.uk",
    },
    {
      id: "01GQMHQBVG5MCXQ6YY1QW4RAT3",
      first_name: "Bobbee",
      last_name: "Pindell",
      email: "bpindell6@oakley.com",
    },
    {
      id: "01GQMHQBVJBAY74NXWCX1Z0D4B",
      first_name: "Garland",
      last_name: "Jewiss",
      email: "gjewiss7@feedburner.com",
    },
    {
      id: "01GQMHQBVM60T7Y5VG3NXWKFTB",
      first_name: "Ambrosio",
      last_name: "Start",
      email: "astart8@nytimes.com",
    },
    {
      id: "01GQMHQBVP6SJQ1BCGBDJPVSNW",
      first_name: "Nehemiah",
      last_name: "Grieveson",
      email: "ngrieveson9@google.com",
    },
    {
      id: "01GQMHQBVQX2RKZCP8TV0Z0EQT",
      first_name: "Winnie",
      last_name: "Cheeney",
      email: "wcheeneya@reverbnation.com",
    },
    {
      id: "01GQMHQBVSBC5R0X8DP1DHM1AT",
      first_name: "Jehu",
      last_name: "Radbourne",
      email: "jradbourneb@twitter.com",
    },
    {
      id: "01GQMHQBVV8GVDGMQNK2Z1DYVW",
      first_name: "Rivy",
      last_name: "Scupham",
      email: "rscuphamc@weebly.com",
    },
    {
      id: "01GQMHQBVXVN7KP2W9C9FJYD5T",
      first_name: "Lauren",
      last_name: "Fevers",
      email: "lfeversd@t-online.de",
    },
    {
      id: "01GQMHQBVZ52J6KEMSMS0P8G41",
      first_name: "Alasteir",
      last_name: "Lamond",
      email: "alamonde@google.it",
    },
    {
      id: "01GQMHQBW1ADFBF61EF1TV5F7N",
      first_name: "Zebedee",
      last_name: "De Gregario",
      email: "zdegregariof@webnode.com",
    },
    {
      id: "01GQMHQBW3QBE9VJXGG104YY5T",
      first_name: "Teodora",
      last_name: "Beckett",
      email: "tbeckettg@rambler.ru",
    },
    {
      id: "01GQMHQBW5VNCB36WH81XKKQNX",
      first_name: "Rici",
      last_name: "Rainforth",
      email: "rrainforthh@hibu.com",
    },
    {
      id: "01GQMHQBW74TGTJ5EY6FR0ZKMH",
      first_name: "Rafaela",
      last_name: "Aldine",
      email: "raldinei@phpbb.com",
    },
    {
      id: "01GQMHQBW9BBVG12S4KSN1QQ9R",
      first_name: "Chiquia",
      last_name: "Camsey",
      email: "ccamseyj@google.com.hk",
    },
  ];

  useEffect(() => {
    setUserInfo(users);
  }, []);

  const HandleFilter = (searchname) => {
    setSearchValues({ ...searchValues, value: searchname });
  };

  const SearchData = (value) => {
    if (value) {
      if (searchValues.filter === "first_name") {
        let filteredData = UserInfo.filter((user) =>
          user.first_name
            .toUpperCase()
            .includes(searchValues.value.toUpperCase())
        );
        setIsActive(true);
        return setUserInfo(filteredData);
      }
      if (searchValues.filter === "last_name") {
        let filteredData = UserInfo.filter((user) =>
          user.last_name
            .toUpperCase()
            .includes(searchValues.value.toUpperCase())
        );
        setIsActive(true);
        return setUserInfo(filteredData);
      }
      if (searchValues.filter === "email") {
        let filteredData = UserInfo.filter((user) =>
          user.email.toUpperCase().includes(searchValues.value.toUpperCase())
        );
        setIsActive(true);
        return setUserInfo(filteredData);
      }
      if (searchValues.filter === "id") {
        let filteredData = UserInfo.filter((user) =>
          user.id.toUpperCase().includes(searchValues.value.toUpperCase())
        );
        setIsActive(true);
        return setUserInfo(filteredData);
      }
    }
  };

  const ClearData = () => {
    setUserInfo(users);
    setSearchValues({ ...searchValues, value: "" });
    setIsActive(false);
  };

  const HandleSelect = (e) => {
    setSearchValues({ ...searchValues, filter: e.currentTarget.value });
  };

  return (
    <DashboardInfoContainer>
      <HeaderContainer>
        <label>Filter by:</label>
        <FilterInput defaultValue={searchValues.filter} onChange={HandleSelect}>
          <option value="first_name">First Name</option>
          <option value="last_name">Last Name</option>
          <option value="email">E-mail</option>
          <option value="id">ID</option>
        </FilterInput>
        <SearchBarContainer>
          <SearchBarInput
            value={searchValues.value}
            onChange={(e) => HandleFilter(e.currentTarget.value)}
          />
          <SearchButton
            onClick={() =>
              isActive ? ClearData() : SearchData(searchValues.value)
            }
          >
            {isActive ? <ClearIcon /> : <SearchIcon />}
          </SearchButton>
        </SearchBarContainer>
      </HeaderContainer>
      <DataOutput>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <b>ID</b>
                </TableCell>
                <TableCell align="center">
                  <b>First Name</b>
                </TableCell>
                <TableCell align="center">
                  <b>Last Name</b>
                </TableCell>
                <TableCell align="center">
                  <b>E-Mail</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {UserInfo.map((row) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.first_name}</TableCell>
                  <TableCell align="center">{row.last_name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DataOutput>
    </DashboardInfoContainer>
  );
}

export default AdminDashboardUsers;
