import CreditCardIcon from "@mui/icons-material/CreditCard";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Card,
  Stack,
  SvgIcon,
  Typography,
  Divider,
  useMediaQuery,
} from "@mui/material";
export const PlusCard = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Card>
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        alignItems={isSmallScreen ? "center" : "flex-start"}
        justifyContent="space-between"
        padding={isSmallScreen ? 1 : 2}>
        <SvgIcon>
          <CreditCardIcon />
        </SvgIcon>
        <Typography variant="subtitle1" color="textPrimary">
          Citibank Plus
        </Typography>
        <SvgIcon sx={{ color: "gray" }}>
          <MoreHorizIcon />
        </SvgIcon>
      </Stack>
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
        padding={isSmallScreen ? 1 : 2}>
        <Typography variant="body2" color="textPrimary" paddingLeft="180px">
          Balance:
        </Typography>
        <Typography variant="subtitle1" color="textPrimary">
          $2505
        </Typography>
      </Stack>
      <Divider />
      <Stack
        direction="row"
        alignItems="center"
        padding={2}
        justifyContent="space-between"
        paddingLeft={22}>
        <Typography variant="body2" color="textinfo" paddingLeft="20px">
          Overdraft:
        </Typography>
        <Typography variant="body2" color="textinfo">
          $3125
        </Typography>
      </Stack>
      <Divider />
      <Stack
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          padding: "10px",
        }}>
        <SvgIcon>
          <CreditCardIcon />
        </SvgIcon>
        <Stack
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "160px",
          }}>
          <Typography variant="subtitle1" color="textinfo">
            Mom's Card
          </Typography>
          <Typography variant="body2" color="textinfo">
            Additional Card
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};
