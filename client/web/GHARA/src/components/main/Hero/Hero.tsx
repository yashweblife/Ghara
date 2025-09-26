import { AiFillAndroid } from "react-icons/ai";
import Button from "../../ui/Button/Button";
import Bold from "../../ui/Typography/Bold/Bold";
import Text from "../../ui/Typography/Text/Text";
export default function Hero() {
    return (
        <div className='dark:bg-gray-900 bg-gray-100 h-112 p-4 sm:p-8 flex justify-center items-center flex-col gap-3 bg-[url("../../../../public/test.svg")] bg-no-repeat bg-center z-1'>
            <Text center className="text-2xl md:text-4xl" bold>
                Take control of your <Bold text='Ghara' />
            </Text>
            <Text center className='md:w-[45ch] text-gray-500 md:text-2xl'>
                Manage your <Bold text='groceries' />, Award your <Bold text='effort' /> and track your < Bold text='spending' />
            </Text>
            <Button variant="solid" className="mt-5" size='lg' rounded="pill" text='Get The App' icon={<AiFillAndroid />} />
        </div>
    )
}