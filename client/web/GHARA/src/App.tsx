import { useEffect } from "react";
import { MdOutlineAccountCircle } from 'react-icons/md';
import Logo from '../public/logo.svg';
import Button from "./components/ui/Button/Button";
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
        className="flex-col w-full flex justify-between px-10 py-5 md:flex-row"
      >
        <div className='flex gap-3 items-center justify-center md:w-full'>
          <img src={Logo} alt="logo" className="w-[50px]" />
          <h1
            className="text-4xl font-bold text-gray-800"
          >
            GHARA
          </h1>

        </div>
        <nav
          className="w-full flex gap-1 mt-5 justify-evenly"
        >
          <Button variant="ghost" size='sm' text='Install' />
          <Button variant="ghost" size='sm' text='About' />
          <Button variant="solid" size='sm' text='Login' icon={<MdOutlineAccountCircle />} />
        </nav>
      </header>
    </>
  )
}

export default App
