import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

const Orders = () => {
  let [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/orders").then((res) => {
      setOrders(res.data)
    })
  }, [])

  {
    if (orders.length > 0) {
      return(
        <div>
          <h3 className="title">Orders ({orders.length})</h3>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Current Value</th>
                </tr>
              </thead>


              {
                orders.map((stock, idx) => {
                  const curValue = stock.price * stock.qty;

                  return (
                    <tbody>
                      <tr key={stock.name}>
                        <td>{stock.name}</td>
                        <td>{stock.qty}.</td>
                        <td>{stock.price.toFixed(2)}</td>
                        <td>{curValue.toFixed(2)}. val</td>
                      </tr>
                    </tbody>
                  )
                })
              }

            </table>
          </div>
      </div>
      )
    }
    else {
      return (
        <div className="orders">
          <div className="no-orders">
            <p>You haven't placed any orders today</p>

            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        </div>
      );
    }
  }



};

export default Orders;
