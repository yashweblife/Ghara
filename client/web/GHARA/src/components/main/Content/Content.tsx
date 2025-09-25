import serverImage from '../../../../public/server-status.svg'
import todoImage from '../../../../public/to-do-app.svg'
import visualImage from '../../../../public/visual-data.svg'
import Card, { CardContent, CardHeader, CardImage } from "../../ui/Card/Card"
import Text from "../../ui/Typography/Text/Text"
export default function Content() {
    return (
        <div className='bg-gray-900 min-h-200 p-5'>
            <div className="rounded-2xl shadow-2xl ring-sky-950 bg-blue-950 w-full p-5 flex justify-center flex-col md:flex-row gap-5">
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
                        <Text center>Self Host</Text>
                    </CardHeader>
                    <CardContent>
                        <Text center>
                            We want you to take control of your data instead of worrying about privacy, so setup the project locally
                        </Text>
                    </CardContent>
                </Card>
                <Card>
                    <CardImage src={todoImage} className='h-115' />
                    <CardHeader>
                        <Text center>Make your Grocery Lists</Text>
                    </CardHeader>
                    <CardContent>
                        <Text center>
                            Our app enables you to better setup a grocery list and gives you an estimate of weekly cost based on what food you chose.
                        </Text>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}