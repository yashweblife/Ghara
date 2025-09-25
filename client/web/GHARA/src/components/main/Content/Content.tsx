import serverImage from '#/server-status.svg'
import todoImage from '#/to-do-app.svg'
import visualImage from '#/visual-data.svg'

import Card, { CardContent, CardHeader, CardHolder, CardImage } from "@/components/ui/Card/Card"
import Text from "@/components/ui/Typography/Text/Text"
export default function Content() {
    return (
        <div className='bg-gray-900 min-h-200 p-5'>
            <CardHolder>
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
            </CardHolder>
        </div>
    )
}