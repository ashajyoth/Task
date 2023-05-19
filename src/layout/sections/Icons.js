import PropTypes from "prop-types";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Grid,
  Typography,
} from "@mui/material";

export const Icons = () => {

  const cardData = [
    {
      id: 1,
      icon: (
        <SvgIcon>
          <CurrencyExchangeOutlinedIcon />
        </SvgIcon>
      ),
      title: "Replenish",
    },
    {
      id: 2,
      icon: (
        <SvgIcon>
          <MonetizationOnIcon />
        </SvgIcon>
      ),
      title: "Pay",
    },
    {
      id: 3,
      icon: (
        <SvgIcon>
          <QrCode2Icon />
        </SvgIcon>
      ),
      title: "Requisities",
    },
    {
      id: 4,
      icon: (
        <SvgIcon>
          <StarBorderIcon />
        </SvgIcon>
      ),
      title: "Favourites",
    },
  ];

  return (
    <>
      <Grid container spacing={1} >
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.id}>
            <Card>
              <CardContent>
                <Stack direction="column" alignItems="center">
                  <Avatar
                    sx={{
                      backgroundColor: "neutral.700",
                      height: 56,
                      width: 56,
                    }}>
                    {card.icon}
                  </Avatar>
                  <Typography variant="body2" paddingTop="13px">
                    {card.title}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};


