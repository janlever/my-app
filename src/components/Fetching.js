import React, { useEffect } from "react"

const Fetching = () => {
  const [data, setData] = useState(null)
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    const data = await response.json()

    console.log({ data })
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <h2>Fetching</h2>
      <ul>{ data.map(row => )}</ul>
    </div>
  )
}

export default Fetching
