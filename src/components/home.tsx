import { ExchangeRate } from "../global/exchange-rate"
import { NavBar } from "../global/navbar"

export const Home = () => {
  return (
    <div>
      <NavBar />
      <h1 className="title title-home flex center">Ortex Trading</h1>
      <ExchangeRate />
    </div>
  )
}
