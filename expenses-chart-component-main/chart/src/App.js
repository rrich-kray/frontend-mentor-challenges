import "./App.css";
import data from "./data";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

function App() {
  console.log(data);
  return (
    <div className="app">
      <div className="content-wrapper">
        <div className="info-bar">
          <div className="info-container">
            <span>My Balance</span>
            <span>$921.48</span>
          </div>
          <div className="logo-container">
            <img src={require("./images/logo.svg").default} alt="logo" />
          </div>
        </div>
        <div className="main-container">
          <div className="chart-container">
            <ResponsiveContainer height="100%" width="100%">
              <BarChart
                height="100%"
                width="100%"
                data={data}
                margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <XAxis datakey="name" axisLine={false} ticks={false} />
                {/* <YAxis datakey="amount" /> */}
                <Tooltip />
                <Bar dataKey="value" fill="rgb(228, 98, 28)" />
                {/* <Bar datakey="uv" fill="#82ca9d" /> */}
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="footer-container">
            <div className="monthly-spend footer-section">
              <span>Total this month</span>
              <span>$478.33</span>
            </div>
            <div className="MoM-change footer-section">
              <span>+2.7%</span>
              <span>From last month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
