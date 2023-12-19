import React, { useState, useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import './StudentToGuideRatio.css';

function Dashboard() {
  const [data] = useState({
    labels: ["Students", "Guides"],
    datasets: [
      {
        label: "Student-Guide Ratio",
        data: [100, 20],
        backgroundColor: ["#4285F4", "#FFC107"],
        hoverBackgroundColor: ["#387BE0", "#F9B700"],
        borderWidth: 1,
        borderColor: "#fff",
      },
    ],
  });

  const chartRef = useRef(null);

  useEffect(() => {
    // Ensure proper cleanup of the existing chart
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new chart
    const ctx = document.getElementById("studentGuideChart").getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "pie",
      data: data,
      options: { responsive: true },
    });

    // Cleanup the chart when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="dashboard">
      <div className="chart-container">
        <h2>Student-Guide Ratio</h2>
        <canvas id="studentGuideChart"></canvas>
      </div>
      <div className="statistics">
        <div className="stat">
          <div className="rounded-rectangle">
            <h3>100</h3>
            <p>Total Students</p>
          </div>
        </div>
        <div className="stat">
          <div className="rounded-rectangle">
            <h3>20</h3>
            <p>Total Guides</p>
          </div>
        </div>
        <div className="stat">
          <div className="rounded-rectangle">
            <h3>50</h3>
            <p>Total Publications</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
