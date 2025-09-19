import { useEffect } from "react"

function App() {
  useEffect(() => {
    test()
  }, [])
  const test = async () => {
    try {
      const res = await fetch('/api/food')
      if (res.status !== 200) {
        throw new Error('Failed to fetch data')
      }
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>

    </>
  )
}

export default App
