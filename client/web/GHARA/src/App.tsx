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
          <button
            className="bg-gray-200 px-4 py-2 rounded-full"
          >
            Account
          </button>
          <button
            className="bg-gray-200 px-4 py-2 rounded-full"
          >
            Points
          </button>
          <button
            className="bg-gray-200 px-4 py-2 rounded-full"
          >
            Grocery List
          </button>
        </nav>
      </header>
    </>
  )
}

export default App
