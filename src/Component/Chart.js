// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";
// import { useSelector } from "react-redux";
// import { selectActiveUsers } from "../Features/userSlice";

// const ChartComponent = () => {
//   const chartRef = useRef();
//   const activeUsers = useSelector(selectActiveUsers);

//   useEffect(() => {
//     const totalUsersCount = 10; // Assuming there are 10 users initially fetched
//     const deletedUsersCount = totalUsersCount - activeUsers.length;

//     const ctx = chartRef.current.getContext("2d");
//     const chartInstance = new Chart(ctx, {
//       type: "doughnut",
//       data: {
//         labels: ["Active Users", "Non-Active users"],
//         datasets: [
//           {
//             data: [activeUsers.length, deletedUsersCount],
//             backgroundColor: ["#36A2EB", "#FF6384"],
//           },
//         ],
//       },
//     });

//     // Destroy the chart instance when the component unmounts
//     return () => {
//       chartInstance.destroy();
//     };
//   }, [activeUsers]);

//   return (
//     <div>
//       <h2>Users Chart</h2>
//       {/* Set smaller width and height for the canvas */}
//       <canvas ref={chartRef} width={200} height={200}></canvas>
//     </div>
//   );
// };

// export default ChartComponent;

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";
import { selectActiveUsers } from "../Features/userSlice";
import "./Chart.css";

const ChartComponent = () => {
  const chartRef = useRef();
  const activeUsers = useSelector(selectActiveUsers);

  useEffect(() => {
    const totalUsersCount = 10; // Assuming there are 10 users initially fetched
    const deletedUsersCount = totalUsersCount - activeUsers.length;

    const ctx = chartRef.current.getContext("2d");
    const chartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Active Users", "Non-Active users"],
        datasets: [
          {
            data: [activeUsers.length, deletedUsersCount],
            backgroundColor: ["#36A2EB", "#FF6384"],
          },
        ],
      },
    });

    // Destroy the chart instance when the component unmounts
    return () => {
      chartInstance.destroy();
    };
  }, [activeUsers]);

  return (
    <div className="chart-container">
      <h2>Users Chart</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartComponent;
