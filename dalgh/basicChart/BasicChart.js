import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "spline",
  },
  title: {
    text: "",
  },
  yAxis: {
    title: {
      text: "حجم",
    },
  },
  series: [
    {
      name: "واردات",
      data: [6, 3, 4, 1, 2, 1],
    },
    {
      name: "صادرات",
      data: [1, 2, 1, 4, 3, 6],
    },
  ],
};

function BasicChart() {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default BasicChart;

// -------------------    نحوه لوپ روی دیتای گرفته شده از سووگر API   ---------

// <div>
// {userProjectData.map((item) => (
//   <div key={item.id} style={{ display: "flex" }}>
//     <div>{item.freelancerUserName}</div>
//     <div>{isEmpty(item.title) ? "کاربر فاقد نام" : item.title}</div>
//   </div>
// ))}
// </div>

// -------------------------------------------------------------------------
