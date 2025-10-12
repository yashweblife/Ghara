import cors from 'cors';
import express, { type Express, type Request, type Response } from 'express';
import FoodRoute from './routes/food-route';
import IngredientRoute from './routes/ingredient-route';
import PointRoute from './routes/point-route';
import ProductRoute from './routes/product-route';
import UserRoute from './routes/user-route';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/food', FoodRoute);
app.use('/api/user', UserRoute);
app.use('/api/point', PointRoute);
app.use('/api/ingredient', IngredientRoute);
app.use('/api/product', ProductRoute);

app.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'Hello World'
    })
})

app.use((req: Request, res: Response) => {
    res.status(404).send('<h1 style="font-family:Arial , Helvetica, sans-serif">Bad Request</h1>');
})
export default app;