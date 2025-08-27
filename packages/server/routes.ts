import type { Request, Response } from 'express';
import express from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
   res.send(`Hello World22!!`);
});

router.get('/api/hello', (req: Request, res: Response) => {
   res.json({ message: 'Hello World!' });
});

export default router;
