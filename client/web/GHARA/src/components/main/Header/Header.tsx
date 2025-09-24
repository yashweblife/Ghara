import { useState } from 'react';
import { AiOutlineSun } from 'react-icons/ai';
import { MdOutlineAccountCircle, MdOutlineDarkMode } from 'react-icons/md';
import Logo from '../../../../public/logo.svg';
import Button from "../../ui/Button/Button";
export default function Header() {
    const [themeMode, setThemeMode] = useState(false);
    const handleThemeChange = () => {
        setThemeMode(prev => !prev);
    }
    return (
        <header
            className="py-10 px-2 flex-col w-full flex md:flex-row items-center align-middle md:justify-between md:px-5 md:py-5"
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
                className="w-full flex gap-1 justify-evenly mt-3 md:mt-0"
            >
                <Button variant="ghost" size='sm' text='Install' />
                <Button variant="ghost" size='sm' text='About' />
                <Button
                    variant={themeMode ? "outlined" : 'solid'}
                    rounded='full'
                    size='sm'
                    icon={themeMode ? <MdOutlineDarkMode /> : <AiOutlineSun />}
                    onClick={handleThemeChange}
                />
                <Button variant="solid" size='sm' text='Login' icon={<MdOutlineAccountCircle />} />
            </nav>
        </header>
    )
}