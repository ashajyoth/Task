import { SvgIcon } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MovingIcon from "@mui/icons-material/Moving";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SettingsIcon from "@mui/icons-material/Settings";
export const items = [
  {
    title: "Accounts",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <AccountBalanceWalletIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: (
      <SvgIcon fontSize="small">
        <SyncAltIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Bonus",
    path: "/bonus",
    icon: (
      <SvgIcon fontSize="small">
        <StarBorderIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Investments",
    path: "/investments",
    icon: (
      <SvgIcon fontSize="small">
        <MovingIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Settings",
    path: "/settings",
    icon: (
      <SvgIcon fontSize="small">
        <SettingsIcon />
      </SvgIcon>
    ),
  },
];
