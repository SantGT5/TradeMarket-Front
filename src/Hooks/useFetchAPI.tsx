import React from "react"
import { w3cwebsocket as W3CWebSocket } from "websocket"
import { Api } from "../types/exchange.type"

export const useFetchAPI = () => {
  // Receiving "dt" and "price" from API
  const [status, SetStatus] = React.useState<Api>({ dt: "", price: 0, prev: 0 })

  const client = new W3CWebSocket(
    "ws://stream.tradingeconomics.com/?client=guest:guest"
  )
  // const prevCountRef: any = React.useRef()
  React.useEffect(() => {
    client.onopen = () => {
      client.send(JSON.stringify({ topic: "subscribe", to: "EURUSD:CUR" }))
      client.onmessage = function (e: any) {
        const data = JSON.parse(e.data)

        if (data.dt || data.price) {
          // Convert timestamp to date
          const date = new Date(data.dt)
          const today =
            date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

          SetStatus({ dt: today, price: data.price, prev: data.prev })
          // prevCountRef.current = status.price
        } else {
          return
        }
      }
    }
  })

  return [status] as const
}
