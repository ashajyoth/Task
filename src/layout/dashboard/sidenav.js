import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';

import {
  Box,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
  Tooltip,
  IconButton,
  Avatar,
} from "@mui/material";
import { items } from "./config";
import { SideNavItem } from "./sidenavitem";

export const SideNav = (props) => {
  const { open, onClose } = props;
  const location = useLocation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box sx={{ p: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Tooltip title="Notifications">
            <IconButton>
              <SvgIcon fontSize="small">
                <NotificationsNoneIcon />
              </SvgIcon>
            </IconButton>
          </Tooltip>
          <Tooltip title="Search">
            <IconButton>
              <SvgIcon fontSize="small">
                <SearchIcon />
              </SvgIcon>
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "cemter",
        }}
      >
        <Avatar
          sx={{
            cursor: "pointer",
            height: 70,
            width: 70,
            marginBottom: "10px",
          }}
        />
        <Typography variant="body2">Stephanie Jones</Typography>
      </Box>

      <Box
        component="nav"
        sx={{
          flexGrow: 1,
          px: 2,
          py: 3,
          my: 6,
          borderRadius: "15px",
          backgroundColor: '#382569',
        }}
      >
        <Stack
          component="ul"
          spacing={1}
          sx={{
            listStyle: "none",
            p: 0,
            m: 0,
          }}
        >
          {items.map((item) => {
            const active = item.path ? location.pathname === item.path : false;

            return (
              <SideNavItem
                active={active}
                disabled={item.disabled}
                external={item.external}
                icon={item.icon}
                key={item.title}
                path={item.path}
                title={item.title}
              />
            );
          })}
        </Stack>
      </Box>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.800",
            color: "common.white",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.800",
          color: "common.white",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
