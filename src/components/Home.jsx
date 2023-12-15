import React from "react";
import "../css/Dashboard.css";
import {
  BsFillDeviceHddFill,
  BsFillGrid3X3GapFill,
  BsHospitalFill,
  BsFillSafeFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
} from "recharts";
import { AiFillFire } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";

import Sidebar from "./Sidebar";

function Home() {
  const data = [
    {
      name: "Total Users",
      uv: 1000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Total Hospitals",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Total FireStations",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Total Police Stations",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ];
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
  ];

  return (
    <>
      <h1 className="text-center text-dark fw-bold p-3 w-25 m-auto ">
        {/* Dashboard */}
      </h1>
      <main className="main-container bg-white">
        <div className="main-cards">
          <div className="card gradient text-bg-dark ">
            <div className="card-inner">
              <h3 className="fw-bold">Devices</h3>
              <FaMobileAlt className="card_icon fs-2" />
            </div>
            <h1>300</h1>
          </div>
          <div className="card  gradient text-white">
            <div className="card-inner">
              <h3 className="fw-bold">Fire Stations</h3>
              <AiFillFire className="card_icon fs-1" />
            </div>
            <h1>12</h1>
          </div>
          <div className="card  gradient text-bg-primary ">
            <div className="card-inner">
              <h3 className="fw-bold">Hospitals</h3>
              <BsHospitalFill className="card_icon fs-2" />
            </div>
            <h1>33</h1>
          </div>
          <div className="card  gradient text-white">
            <div className="card-inner">
              <h3 className="fw-bold">Police Stations</h3>
              <BsFillSafeFill className="card_icon fs-2" />
            </div>
            <h1>42</h1>
          </div>
        </div>

        {/* <div className="charts">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={730} height={250}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
              <Pie
                data={data02}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div> */}

        <div className="charts">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </>
  );
}

export default Home;
