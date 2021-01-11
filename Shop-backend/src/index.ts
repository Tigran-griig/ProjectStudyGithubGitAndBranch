import express from 'express';
import {createServer} from 'http'
import dotenv from 'dotenv'

import './core/db'
dotenv.config()

import createRoutes from './core/routes'

const app = express();
const http = createServer(app)


// @ts-ignore
createRoutes(app);





const PORT: number = process.env.PORT ? Number(process.env.PORT) : 3040;

http.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})