import Content from "@/components/main/Content/Content";
import Header from "@/components/main/Header/Header";
import Hero from "@/components/main/Hero/Hero";
import Button from "@/components/ui/Button/Button";
import { MdInstallMobile, MdOutlineAccountCircle, MdOutlineHome } from "react-icons/md";
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
            <Hero variant="cool"></Hero>
            <Content></Content>
        </>
    )
}