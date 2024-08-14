import express, { Request, Response } from 'express';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define the type for the server functions
type ServerFunction = (req: Request, res: Response) => void;

// Simulated servers
const servers: ServerFunction[] = [
    (req: Request, res: Response) => {
        res.send({ status: 200, message: "server 1" });
    },
    (req: Request, res: Response) => {
        res.send({ status: 200, message: "server 2" });
    },
    (req: Request, res: Response) => {
        res.send({ status: 200, message: "server 3" });
    },
    (req: Request, res: Response) => {
        res.send({ status: 200, message: "server 4" });
    },
    (req: Request, res: Response) => {
        res.send({ status: 200, message: "server 5" });
    }
];

// Load balancer state
let currentServer = 0;

// Middleware to handle incoming requests and distribute them to backend servers
app.use((req: Request, res: Response) => {
    const server = servers[currentServer];
    currentServer = (currentServer + 1) % servers.length;
    server(req, res);
});

// Start the load balancer
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});

