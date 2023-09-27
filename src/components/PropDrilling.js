import React, { useState } from "react"

const PropDrilling = () => {
  const [weather, setWeather] = useState("ff")

  return <Europe weather={weather} />
}

const Europe = ({ weather }) => {
  return <Estonia weather={weather} />
}
const Estonia = ({ weather }) => {
  return <Tallinn weather={weather} />
}

export default PropDrilling
