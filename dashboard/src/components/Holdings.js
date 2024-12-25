import React, { useState, useEffect } from "react";
import axios from "axios"
// import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  let [allHoldings, setAllHoldings] = useState([]);
  let [basicVal, setBasicVal] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  useEffect(() => {
    setBasicVal([]);
    axios.get("http://localhost:3002/basic").then((res) => {
      setBasicVal([]);
      let val = (res.data)
      setBasicVal(val);
    })
  }, []);

  // const labels = allHoldings.map((subArray) => subArray["name"]);

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "Stock Price",
  //       data: allHoldings.map((stock) => stock.price),
  //       backgroundColor: "rgba(255, 99, 132, 0.5)",
  //     },
  //   ],
  // };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>


          {
            allHoldings.map((stock, idx) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tbody>
                  <tr key={stock.name}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}.</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{curValue.toFixed(2)}. val</td>
                    <td className={profClass}>
                      {(curValue - stock.avg * stock.qty).toFixed(2)}
                    </td>
                    <td className={profClass}>{stock.net}</td>
                    <td className={dayClass}>{stock.day}</td>
                  </tr>
                </tbody>
              )
            })
          }

        </table>
      </div>

      <div>
        {
          basicVal.map((val) => {
            return (
              <div className="row">
                <div className="col">
                  <h5>
                    {val.holdingsNow}.<span>55</span>{" "}
                  </h5>
                  <p>Total investment</p>
                </div>
                <div className="col">
                  <h5>
                    {val.holdingBought}.<span>95</span>{" "}
                  </h5>
                  <p>Current value</p>
                </div>
                <div className="col">
                  <h5>{val.holdingsNow - val.holdingBought} <span>({(((val.holdingsNow - val.holdingBought) / val.holdingBought) * 100).toFixed(2)}%)</span></h5>
                  <p>P&L</p>
                </div>
              </div>
            )
          })
        }
      </div>

      {/* <VerticalGraph data={data} /> */}

    </>
  );
};

export default Holdings;
