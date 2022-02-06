import React from "react"
import { w3cwebsocket as W3CWebSocket } from "websocket"

export const ExchangeRate = () => {
  const [status, SetStatus] = React.useState<any>()

  const client = new W3CWebSocket(
    "ws://stream.tradingeconomics.com/?client=guest:guest"
  )

  React.useEffect(() => {
    client.onopen = () => {
      console.log("Connection established!")
      client.send(JSON.stringify({ topic: "subscribe", to: "EURUSD:CUR" }))
      client.onmessage = function (e: any) {
        const today = new Date(e.timeStamp * 1000)
        // const date = new Date(e.timeStamp * 1000)
        // const hours = date.getHours()
        // const minutes = "0" + date.getMinutes()
        // const seconds = "0" + date.getSeconds()
        // const formattedTime =
        //   hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2)
        console.log(today)
        const options: any = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }
        const date = today.toLocaleDateString("en-EN", options)
        console.log(e)

        SetStatus(date)
      }
    }
  })

  console.log("SOu status -> ", status)

  return (
    <div>
      <h1>{status}</h1>
    </div>
  )
}
