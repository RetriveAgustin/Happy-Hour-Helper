import React from "react";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useAuth } from "../../context/authContext";

function AvatarIcon({ logout }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const user = useSelector((state) => state.root.userLogged);
  // const { logout } = useAuth;

  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOutHandler = () => {
    // logout();
  };

  return (
    <>
      <div>
        <Tooltip title="Open Settings">
          <IconButton onClick={handleOpenUserMenu}>
            <AccountCircleIcon sx={{ color: "white", fontSize: 30 }} />
          </IconButton>
        </Tooltip>
        <Menu
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {/* {settings.map((setting) => (
            <MenuItem key={setting}>
              <Typography>{setting}</Typography>
            </MenuItem>
          ))} */}
          <MenuItem onClick={() => navigate("/user")}>Account</MenuItem>
          <MenuItem>Dashboard</MenuItem>
          <MenuItem onClick={logOutHandler}>Log Out</MenuItem>
        </Menu>
      </div>
    </>
  );
}

export default AvatarIcon;
