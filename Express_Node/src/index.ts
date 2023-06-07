import express, {Express, Request, Response} from 'express';

const app: Express = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
    res.json({data: 'ok'})
})

app.get('/test', (req: Request, res: Response) => {
    res.json({data: 'Test ok'})
})

app.post('/save/:name', (req: Request, res: Response) => {
    console.log(req.params, req.body);
    res.json({data: req.params})
})

app.listen(PORT, () => {
    console.log('Running on the server ', PORT);
})