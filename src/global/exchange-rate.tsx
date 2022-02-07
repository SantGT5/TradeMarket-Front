import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs"

import { useFetchAPI } from "../Hooks/useFetchAPI"

export const ExchangeRate = () => {
  const [status] = useFetchAPI()

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
