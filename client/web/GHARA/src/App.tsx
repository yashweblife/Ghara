import { useEffect } from "react"
import Button from "./components/ui/Button/Button"

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
      <header
        className="w-full flex justify-between align-center px-10 py-5"
      >
        <h1
          className="text-4xl font-bold"
        >
          GHARA
        </h1>
        <nav
          className="flex gap-5"
        >
          <Button variant="primary" size='large'>hello</Button>
          <Button variant="primary" size='large'>hello</Button>
          <Button variant="primary" size='large'>hello</Button>
        </nav>
      </header>
    </>
  )
}

export default App
