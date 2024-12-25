import React, { useState, useEffect } from "react";
import axios from "axios";


const Summary = () => {
  const [basicVal, setBasicVal] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/basic")
      .then((res) => {
        setBasicVal(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {basicVal.map((val, index) => {
        return (
          <div key={index}>
            <div className="username">
              <h6>Hi, User!</h6>
              <hr className="divider" />
            </div>

            <div className="section">
              <span>
                <p>Equity</p>
              </span>

              <div className="data">
                <div className="first">
                  <h3>{(val.margin).toLocaleString()}</h3>
                  <p>Margin available</p>
                </div>
                <hr />

                <div className="second">
                  <p>
                    Margins used <span>0</span>{" "}
                  </p>
                  <p>
                    Opening balance <span>{(val.margin).toLocaleString()}</span>{" "}
                  </p>
                </div>
              </div>
              <hr className="divider" />
            </div>

            <div className="section">
              <span>
                <p>Holdings (13)</p>
              </span>

              <div className="data">
                <div className="first">
                  <h3 className="profit">
                    {(val.holdingsNow - val.holdingBought).toLocaleString()}{" "}
                    <small>
                      +(
                      {(((val.holdingsNow - val.holdingBought) / val.holdingBought) * 100).toFixed(2)}%)
                    </small>{" "}
                  </h3>
                  <p>P&L</p>
                </div>
                <hr />

                <div className="second">
                  <p>
                    Current Value <span>{val.holdingsNow.toLocaleString()}</span>{" "}
                  </p>
                  <p>
                    Investment <span>{val.holdingBought.toLocaleString()}</span>{" "}
                  </p>
                </div>
              </div>
              <hr className="divider" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Summary;
