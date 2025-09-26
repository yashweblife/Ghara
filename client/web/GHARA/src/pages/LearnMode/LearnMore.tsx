import Content from "@/components/main/Content/Content";
import Header from "@/components/main/Header/Header";
import Hero from "@/components/main/Hero/Hero";
import Button from "@/components/ui/Button/Button";
import Text from "@/components/ui/Typography/Text/Text";
import { FaQuestion, FaServer } from "react-icons/fa";
import { MdInstallMobile, MdOutlineAccountCircle, MdOutlineHome } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";
import { Link } from "react-router-dom";


export default function Page() {
    return (
        <>
            <Header title="Ghara">
                <Link to='/'>
                    <Button icon={<MdOutlineHome />} size='sm' variant="ghost" text='Home' />
                </Link>
                <Button icon={<MdInstallMobile />} size='sm' variant="outlined" text='Install' />
                <Button icon={<MdOutlineAccountCircle />} size='sm' variant="solid" text='Login' />
            </Header>
            <Hero variant="cool">
                <Text className="text-4xl text-shadow-xs drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" center bold>Learn How To Use & Set Things Up</Text>
                <nav className=" w-full md:w-1/2 flex flex-col justify-center md:flex-row gap-3 mt-10">
                    <Button className="drop-shadow-2xl w-[100%] ring-3 ring-sky-800" rounded='pill' icon={<FaServer />} text='Server Setup' />
                    <Button className="drop-shadow-2xl w-[100%] ring-3 ring-sky-800" rounded='pill' icon={<SiGoogledocs />} text='App Use' />
                    <Button className="drop-shadow-2xl w-[100%] ring-3 ring-sky-800" rounded='pill' icon={<FaQuestion />} text='FAQ' />
                </nav>
            </Hero >
            <Content></Content>
        </>
    )
}