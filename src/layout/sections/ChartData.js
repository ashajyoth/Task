import React from "react";
import Chart from "react-apexcharts";
import { Card, Tab, Tabs } from "@mui/material";

function ChartData() {
  const options = {
    series: [950, 227, 534, 343],
    labels: ["Cash", "Other", "Supermarkets", "Restaurants"],
    colors: ["#87CEEB", "#8F8AC8", "#736CC5", "#231C73"],
    plotOptions: {
      pie: {
        expandOnClick: true,
        donut: {
          size: "75px",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: "Restaurants",
              formatter: function (w) {
                const value = w.globals.series[3];
                const percentage = (
                  (value / w.globals.seriesTotals.reduce((a, b) => a + b)) *
                  100
                ).toFixed(2);
                return `$ ${value} ${percentage}%`;
              },
              fontSize: "24px",
              color: "#808080",
            },
          },
        },
      },
    },
  };
  const series = [950, 227, 534, 343];

  return (
    <React.Fragment>
      <div>
        <Tabs sx={{ mb: 3 }} value="costs">
          <Tab label="Costs" value="costs" />
          <Tab label="Income" value="income" />
        </Tabs>
        <Chart
          options={options}
          series={series}
          type="donut"
          width="100%"
          height={300}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {series.slice(0, 2).map((value, index) => (
          <Card
            key={index}
            style={{
              height: "40px",
              width: "180px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  backgroundColor: options.colors[index],
                  width: "10px",
                  height: "10px",
                  marginRight: "5px",
                  borderRadius: "50%",
                }}></div>
              <p>{options.labels[index]}</p>
            </div>
            <p>$ {value}</p>
          </Card>
        ))}
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
        {series.slice(2).map((value, index) => (
          <Card
            key={index + 2}
            style={{
              height: "40px",
              width: "180px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: "20px",
            }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  backgroundColor: options.colors[index + 2],
                  width: "10px",
                  height: "10px",
                  marginRight: "5px",
                  borderRadius: "50%",
                }}></div>
              <p>{options.labels[index + 2]}</p>
            </div>
            <p>$ {value}</p>
          </Card>
        ))}
      </div>
    </React.Fragment>
  );
}

export default ChartData;
