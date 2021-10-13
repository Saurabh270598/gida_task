import React, { useState } from "react";
import "./dialog.css";
import ClipLoader from "react-spinners/ClipLoader";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
  datasets: [
    {
      label: "No of Trees Planted",
      data: [120, 119, 223, 445, 532, 588],
      fill: true,
      backgroundColor: "green",
      borderColor: "rgba(255, 99, 132, 0.2)"
    }
  ]
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

const Dialoge = ({ closeModal, openShow }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  function btnLoading() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }
  function btnGraph() {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 10000);
  }

  return (
    <div className="mainDialogCover">
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                closeModal(false);
                openShow(true);
              }}
            >
              X
            </button>
          </div>
          <div>
            {visible || loading ? null : (
              <h1>Please click the button to see action!</h1>
            )}
          </div>

          <div className="footer">
            {visible ? (
              <Line data={data} options={options} />
            ) : (
              <div>
                <button onClick={btnLoading}>Button 1</button>

                <ClipLoader color={"#123abc"} loading={loading} size={35} />

                <button onClick={btnGraph}>Button 2</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialoge;
