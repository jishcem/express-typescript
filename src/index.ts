import express, { Request, Response } from 'express';

const app = express();
const port = 8000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World from Express+TypeScript");
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on http://localhost:${port}`);    
});