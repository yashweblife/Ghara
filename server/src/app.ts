import cors from 'cors';
import express, { type Request, type Response } from 'express';
import FoodRoute from './routes/food-route';
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', FoodRoute);
app.get('/', (req: Request, res: Response) => {
    res.send('hello world');
})

app.use((req: Request, res: Response) => {
    res.status(404).send('<h1 style="font-family:Arial , Helvetica, sans-serif">Bad Request</h1>');
})
export default app;