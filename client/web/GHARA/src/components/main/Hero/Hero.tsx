import { AiFillAndroid } from "react-icons/ai";
import Button from "../../ui/Button/Button";
import Bold from "../../ui/Typography/Bold/Bold";

export default function Hero() {
    return (
        <div className='dark:bg-gray-900 bg-gray-100 h-112 p-4 sm:p-8 flex justify-center items-center flex-col gap-3'>
            <p className='dark:text-white text-2xl md:text-4xl font-bold'>
                Take control of your <Bold text='Ghara' />
            </p>
            <p className="dark:text-white md:w-[45ch] text-center text-gray-500 md:text-2xl">
                Manage your <Bold text='groceries' />,
                Award yourself for <Bold text='effort' />
                and track your < Bold text='spending' />
            </p>
            <Button variant="solid" className="mt-5" size='lg' rounded="pill" text='Get The App' icon={<AiFillAndroid />} />
        </div>
    )
}