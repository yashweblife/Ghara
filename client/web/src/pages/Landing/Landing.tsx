import bg3Image from '#/bg3.svg';
import serverImage from '#/server-status.svg';
import todoImage from '#/to-do-app.svg';
import visualImage from '#/visual-data.svg';
import Content from "@/components/main/Content/Content";
import Header from "@/components/main/Header/Header";
import Hero from "@/components/main/Hero/Hero";
import Button from "@/components/ui/Button/Button";
import Card, { CardContent, CardHeader, CardHolder, CardImage } from "@/components/ui/Card/Card";
import Bold from "@/components/ui/Typography/Bold/Bold";
import Text from "@/components/ui/Typography/Text/Text";
import { AiFillAndroid } from "react-icons/ai";
import { MdInstallMobile, MdOutlineAccountCircle, MdOutlineInfo } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Page() {
    return (
        <>
            <Header>
                <Link to='learn-more'>
                    <Button icon={<MdOutlineInfo />} variant="ghost" size='sm' text='Learn More' />
                </Link>
                <Button variant="outlined" size='sm' text='Install' icon={<MdInstallMobile />} />
                <Button variant="solid" size='sm' text='Login' icon={<MdOutlineAccountCircle />} />
            </Header>
            <Hero>
                <Text center className="text-3xl md:text-4xl text-shadow-xs drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" bold>
                    Take control of your <Bold text='Ghara' />
                </Text>
                <Text center className='md:w-[45ch] text-gray-500 md:text-2xl text-shadow-xs drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                    Manage your <Bold text='groceries' />, Award your <Bold text='effort' /> and track your < Bold text='spending' />
                </Text>
                <Button variant="solid" className="mt-5" size='lg' rounded="pill" text='Get The App' icon={<AiFillAndroid />} />
            </Hero>
            <Content>
                <div className='p-5 md:py-0 md:pb-5 -translate-y-10 z-10 flex flex-col gap-5'>
                    <CardHolder className='backdrop-blur-2xl bg-sky-900/20'>
                        <Text center className='text-4xl w-full py-5' bold>What We Offer</Text>
                        <Card>
                            <CardImage src={visualImage} />
                            <CardHeader>
                                <Text center>Visualize Your Weekly Spending</Text>
                            </CardHeader>
                            <CardContent>
                                <Text center>
                                    Our app allows you to visualize you weekly spending and understand where you can save money
                                </Text>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardImage src={serverImage} />
                            <CardHeader>
                                <Text center>Self Host An Instance</Text>
                            </CardHeader>
                            <CardContent>
                                <Text center>
                                    We want you to take control of your data instead of worrying about privacy, so setup the project locally
                                </Text>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardImage src={todoImage} />
                            <CardHeader>
                                <Text center>Make your Grocery Lists</Text>
                            </CardHeader>
                            <CardContent>
                                <Text center>
                                    Our app enables you to better setup a grocery list and gives you an estimate of weekly cost based on what food you chose.
                                </Text>
                            </CardContent>
                        </Card>
                    </CardHolder>
                </div>
                <div className='bg-gray-900'>
                    <img src={bg3Image} alt="background image" />
                </div>
            </Content>
        </>
    )
}