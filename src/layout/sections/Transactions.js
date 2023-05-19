import { Card, Stack, SvgIcon, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
export const Transactions = () => {
  const transaction = [
    {
      id: 1,
      icon: (
        <SvgIcon>
          <GoogleIcon />
        </SvgIcon>
      ),
      title: "Amazon",
      info: "Citibank Plus",
      amount: "$ 253",
    },
    {
      id: 2,
      icon: (
        <SvgIcon>
          <PinterestIcon />
        </SvgIcon>
      ),
      title: "Walkmart",
      info: "Citibank Visa",
      amount: "$ 79",
    },
  ];
  return (
    <>
      <Card>
        {transaction.map((item) => (
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
              <Typography variant="body2" color="textinfo">
                {item.info}
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
