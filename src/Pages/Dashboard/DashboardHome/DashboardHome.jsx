
import React from "react";
import "./DashboardHome.css";
import TotalSellerChart from "./TotalSellerChart";
import DailyOverviewChart from "./DailyOverviewChart";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GrMoney } from "react-icons/gr";
import { IoIosCut } from "react-icons/io";
import Title from "../../../Shared/Title";

function DashboardHome() {
  const onChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  const data = [
    {
      name: "Total User",
      count: "20.10K", 
      textColor:"#6A5ECC" ,
      icon: <HiMiniUserGroup color="#6A5ECC" size={24} />,
      bgColor: "#E5E5E5",
    },
    {
      name: "Total Lesson Booked",
      count: "920", 
      textColor:"#3F0D47" ,
      icon: <IoIosCut color="#3F0D47" size={24} />,
      bgColor: "#E5E5E5",
    },
    {
      name: "Total Revenue",
      count: "150.10K", 
      textColor:"#00B047" ,
      icon: <GrMoney color="#00B047" size={24} />,
      bgColor: "#E5E5E5",
    },
    {
      name: "Monthly User",
      count: "20.10K", 
      textColor:"#6A5ECC" ,
      icon: <HiMiniUserGroup color="#6A5ECC" size={24} />,
      bgColor: "#E5E5E5",
    },
    {
      name: "Monthly Lesson Booked",
      count: "920", 
      textColor:"#3F0D47" ,
      icon: <IoIosCut color="#3F0D47" size={24} />,
      bgColor: "#E5E5E5",
    },
    {
      name: "Monthly Revenue",
      count: "150.10K", 
      textColor:"#00B047" ,
      icon: <GrMoney color="#00B047" size={24} />,
      bgColor: "#E5E5E5",
    },
  ];

  return (
    <div> 
      <Title className="">Dashboard</Title>
      <div className="grid grid-cols-3 gap-3 items-center mt-4">
        {data.map((item, index) => <div key={index} className="bg-white rounded-md p-10 "
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              background: `${item.bgColor}`,
              width: "44px",
              height: "44px",
              borderRadius: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item?.icon}
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                fontSize: "1.2em",
                fontWeight: "400",
                color: "#6A6D7C",
              }}
            >
              {item.name}
            </p>
            <p
              style={{
                fontSize: "1.6em",
                fontWeight: "600",
                color: item?.textColor,
              }}
            >
              {item.count} +
            </p>
          </div>
        </div>)}

      </div>
      <div 
        style={{
          marginTop: "20px",
          marginBottom: "15px",
          display: "grid",
          gridTemplateColumns: "auto auto",
          gap: "20px",
        }}
      >
        <div className="bg-black"
          style={{
            borderRadius: "15px",
            backgroundColor: "#fff",
            width: "100%",
            height: "370px",
            padding: "10px 20px 20px 20px",
          }}
        >
          <TotalSellerChart />
        </div>
        <div
          style={{
            borderRadius: "15px",
            backgroundColor: "#fff",
            width: "100%",
            height: "370px",
            padding: "10px 20px 20px 20px",
          }}
        >
          <DailyOverviewChart />
        </div>
      </div>

    </div>
  );
}

export default DashboardHome;
