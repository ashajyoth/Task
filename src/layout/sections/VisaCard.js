
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Avatar,
  Card,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery
} from "@mui/material";

export const VisaCard = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Card>
        <Stack
          direction={isSmallScreen ? "column" : "row"}
          alignItems={isSmallScreen ? "center" : "flex-start"}
          justifyContent="space-between"
          padding={isSmallScreen ? 1 : 2}>
          <SvgIcon>
            <CreditCardOutlinedIcon/>
          </SvgIcon>
          <Typography variant="subtitle1" color="textPrimary">
            Citibank Visa
          </Typography>
          <SvgIcon sx= {{color: 'gray'}}>
            <MoreHorizIcon />
          </SvgIcon>
        </Stack>
        <Stack
          direction={isSmallScreen ? "column" : "row"}
          alignItems="center"
          justifyContent="space-between"
          padding={isSmallScreen ? 1 : 2}
          >
          <Typography variant="body2" color="textPrimary" paddingLeft={20}>
            Balance:
          </Typography>
          <Typography variant="subtitle1" color="textPrimary">
            $ 1453
          </Typography>
        </Stack>
      
    </Card>
  );
};


