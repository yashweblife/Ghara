import Content from "@/components/main/Content/Content";
import Header from "@/components/main/Header/Header";
import Hero from "@/components/main/Hero/Hero";
import Button from "@/components/ui/Button/Button";
import LinkList from "@/components/ui/LinkList/LinkList";
import Text from "@/components/ui/Typography/Text/Text";
import { FaQuestion, FaServer } from "react-icons/fa";
import { MdInstallMobile, MdOutlineAccountCircle, MdOutlineHome } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";
import { Link } from "react-router-dom";


export default function Page() {
    const links = {
        'Node JS': 'https://nodejs.org/en/download',
        'Docker': 'https://nodejs.org/en/download',
        'Github': 'https://nodejs.org/en/download',
        'Ngrok': 'https://nodejs.org/en/download',
    }

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
                    <a href="#test1">
                        <Button className="drop-shadow-2xl w-[100%] ring-3 ring-sky-800" rounded='pill' icon={<FaServer />} text='Server Setup' />
                    </a>
                    <Button className="drop-shadow-2xl w-[100%] ring-3 ring-sky-800" rounded='pill' icon={<SiGoogledocs />} text='App Setup' />
                    <Button className="drop-shadow-2xl w-[100%] ring-3 ring-sky-800" rounded='pill' icon={<FaQuestion />} text='FAQ' />
                </nav>
            </Hero >
            <Content className='p-10 gap-5 flex flex-col'>
                <Text className="text-3xl text-center md:text-left" id='test1'>Server Setup</Text>
                <Text bold className="text-center md:text-left">What to Expect</Text>
                <Text className="text-center md:text-left">
                    The server is critical to the functioning of the app, here are some things you will need in order to get your own server running
                </Text>
                <Text className="text-3xl text-center md:text-left">Prequesites tools</Text>
                <LinkList items={links} />
                <hr className="text-white" />
                <Text className="text-3xl text-center md:text-left" id='test2'>Server Setup</Text>
                <Text bold className="text-center md:text-left">What to Expect</Text>
                <Text className="text-center md:text-left">
                    The server is critical to the functioning of the app, here are some things you will need in order to get your own server running
                </Text>

            </Content>
        </>
    )
}