import React from "react";
import { IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function AvatarIcon() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = ["Account", "Dashboard", "Log In / Register"];

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
          {settings.map((setting) => (
            <MenuItem key={setting}>
              <Typography>{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </>
  );
}

export default AvatarIcon;
