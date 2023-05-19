import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Card, Stack, SvgIcon, Typography } from "@mui/material";

export const Bonus = () => {
  const bonus = [
    {
      id: 1,
      icon: (
        <SvgIcon>
          <CreditCardIcon />
        </SvgIcon>
      ),
      title: "Citibank Plus",
      amount: "$ 53",
    },
    {
      id: 2,
      icon: (
        <SvgIcon>
          <CreditCardIcon />
        </SvgIcon>
      ),
      title: "Citibank Visa",
      amount: "$ 99",
    },
  ];
  return (
    <>
      <Card>
        {bonus.map((item) => (
          <Stack
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              padding: "10px",
            }}>
            {item.icon}
            <Stack
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "130px",
              }}>
              <Typography variant="subtitle1" color="textinfo">
                {item.title}
              </Typography>
            </Stack>
            <Typography
              variant="subtitle1"
              color="textinfo"
              paddingLeft="110px">
              {item.amount}
            </Typography>
          </Stack>
        ))}
      </Card>
    </>
  );
};
