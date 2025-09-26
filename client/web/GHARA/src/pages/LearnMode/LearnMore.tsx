import Header from "@/components/main/Header/Header";
import Button from "@/components/ui/Button/Button";
import { MdInstallMobile, MdOutlineAccountCircle, MdOutlineHome } from "react-icons/md";

export default function Page() {
    return (
        <>
            <Header title="Ghara | Learn More">
                <Button icon={<MdOutlineHome />} size='sm' variant="ghost" text='Home' />
                <Button icon={<MdInstallMobile />} size='sm' variant="outlined" text='Install' />
                <Button icon={<MdOutlineAccountCircle />} size='sm' variant="solid" text='Login' />
            </Header>
        </>
    )
}