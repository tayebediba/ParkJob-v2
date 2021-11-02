import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "spline",
  },
  title: {
    text: "درآمد کسب شده",
  },
  xAxis: {
    categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
  },
  yAxis: {
    title: {
      text: "درآمد",
    },
  },

  series: [
    {
      name: "رشد درآمد",
      data: [1, 3, 2, 4, 5, 3],
    },
  ],
  innerWidth: "100%",
  innerHeight: "100%",
};

function BasicChart() {
  return (
    <div style={{ width: "100%" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default BasicChart;
