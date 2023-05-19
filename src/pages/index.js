import {
  Box,
  Container,
  Unstable_Grid2 as Grid,
  SvgIcon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { PlusCard } from "../layout/sections/PlusCard";
import { Icons } from "../layout/sections/Icons";
import AddIcon from "@mui/icons-material/Add";
import { VisaCard } from "../layout/sections/VisaCard";
import { Transactions } from "../layout/sections/Transactions";
import ChartData from "../layout/sections/ChartData";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
const Page = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} md={6} lg={6}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5">Cards</Typography>
                <SvgIcon>
                  <AddIcon />
                </SvgIcon>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              sx={{ display: "flex", justifyContent: "flex-end" }}>
              <SvgIcon>
                <DensityMediumIcon />
              </SvgIcon>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={"space-between"}
            spacing={isSmallScreen ? 2 : 4}>
            <Grid item xs={12} md={6} lg={6}>
              <Grid container flexDirection={"column"} xs={12}>
                <Grid item>
                  <PlusCard />
                </Grid>
                <Grid item>
                  <VisaCard />
                </Grid>
                <Grid item>
                  <Typography variant="h5" padding="10px">
                    Transactions
                  </Typography>
                  <Transactions />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Grid item>
                <Icons />
              </Grid>

              <Grid item>
                <ChartData />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={isSmallScreen ? 2 : 4}
            flexDirection={"column"}
            sx={{
              height: "100%",
            }}></Grid>
          <Grid
            container
            flexDirection={"c"}
            spacing={isSmallScreen ? 2 : 4}
            sx={{
              height: "100%",
            }}></Grid>
        </Container>
      </Box>
    </>
  );
};

export default Page;
