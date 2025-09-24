import { AiFillAndroid } from "react-icons/ai";
import Button from "../../ui/Button/Button";

export default function Hero() {
    return (
        <div className='dark:bg-gray-900 bg-gray-100 h-112 p-4 sm:p-8 flex justify-center items-center flex-col gap-3'>
            <p className='dark:text-white text-2xl md:text-4xl font-bold'>
                Take control of your <b className="text-sky-400">Ghara</b>
            </p>
            <p className="dark:text-white md:w-[45ch] text-center text-gray-500 md:text-2xl">
                Manage your <b className="text-sky-400">groceries</b>,
                Award yourself for <b className="text-sky-400">effort</b>
                and track your <b className="text-sky-400">spending</b>
            </p>
            <Button variant="solid" className="mt-5" size='lg' rounded="pill" text='Get The App' icon={<AiFillAndroid />} />
        </div>
    )
}