import { useEffect } from "react";
import Header from "./components/main/Header/Header";
import Hero from "./components/main/Hero/Hero";
import Content from "./components/main/Content/Content";
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
      <Header />
      <Hero />
      <Content />
    </>
  )
}

export default App
