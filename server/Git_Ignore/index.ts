import express, {Express, Request, Response} from 'express';

const app: Express = express();
const PORT = 3000;

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    console.log(req.params, req.body);
    res.json({data: 'ok'})
})

app.get('/test', (req: Request, res: Response) => {
    const dataObj = {data: 'Test ok'}
    res.json(dataObj)
})

app.post('/:name', (req: Request, res: Response) => {
    console.log(req.params, req.body, req.params.name);
    res.json({data: req.params})
})

app.put('/update/:id', (req: Request, res: Response) => {
    console.log(req.params, req.body);
    res.json({data: req.params})
})

app.delete('/delete/:id', (req: Request, res: Response) => {
    console.log(req.params, req.body, req.params.id);
    res.json({data: req.params})
})

app.patch('/update/:id', (req: Request, res: Response) => {
    console.log(req.params, req.body);
    res.json({data: req.params})  
})

app.listen(PORT, () => {
    console.log('Running on the server ', PORT);
})