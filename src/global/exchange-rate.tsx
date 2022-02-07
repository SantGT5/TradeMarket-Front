import React from "react"
import { w3cwebsocket as W3CWebSocket } from "websocket"
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs"

// Type
import { Api } from "../types/exchange.type"

export const ExchangeRate = () => {
  // Receiving "dt" and "price" from API
  const [status, SetStatus] = React.useState<Api>({ dt: "", price: 0, prev: 0 })
  const prevCountRef: any = React.useRef()
  const client = new W3CWebSocket(
    "ws://stream.tradingeconomics.com/?client=guest:guest"
  )

  React.useEffect(() => {
    client.onopen = () => {
      console.log("Connection established!")
      client.send(JSON.stringify({ topic: "subscribe", to: "EURUSD:CUR" }))
      client.onmessage = function (e: any) {
        const data = JSON.parse(e.data)

        if (data.dt || data.price) {
          // Convert timestamp to date
          const date = new Date(data.dt)
          const today =
            date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

          SetStatus({ dt: today, price: data.price, prev: data.prev })
          prevCountRef.current = status.price
        } else {
          return
        }
      }
    }
  })

  console.log("SOu status -> ", status)

  return (
    <div>
      <h3 className="center-grid">{status.dt}</h3>
      <div className="flex center">
        <div className="container-card">
          <div className="flex align-item">
            <div className="exhange-container">
              {" "}
              <h4 className="currency-name">EUR/USD</h4>
              <span className="flex align-item">
                {status.price} - {status.prev}
                {status.price >= status.prev ? (
                  <BsArrowUpShort size={30} color="green" />
                ) : (
                  <BsArrowDownShort size={30} color="red" />
                )}
              </span>
            </div>
            <div className="btn-flex-direction">
              <button className="btn-sell">Sell</button>
              <button className="btn-buy">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
