import Content from "@/components/main/Content/Content";
import Header from "@/components/main/Header/Header";
import Hero from "@/components/main/Hero/Hero";
import Button from "@/components/ui/Button/Button";
import { MdInstallMobile, MdOutlineAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Page() {
    return (
        <>
            <Header>
                <Link to='learn-more'>
                    <Button variant="ghost" size='sm' text='Learn More' />
                </Link>
                <Button variant="outlined" size='sm' text='Install' icon={<MdInstallMobile />} />
                <Button variant="solid" size='sm' text='Login' icon={<MdOutlineAccountCircle />} />
            </Header>
            <Hero />
            <Content />
        </>
    )
}