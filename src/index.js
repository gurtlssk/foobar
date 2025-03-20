import express from 'express';
import 'dotenv/config'
import 'node-cron';
import { schedule } from 'node-cron';
import { crawling } from './scheduler.js';

const app = express();

const port = process.env.PORT || 3000;

const crawling_url = '';

const time = (req,res,next) => {
    console.log('time:', new Date());
}

// 7 : s
const task = schedule('* * * * 7',() => {
    crawling(crawling_url);
},{
    scheduled: false
});

app.use(time);

app.get('/',(req,res) => { res.sendStatus('')});

app.listen(port, () => {
    console.log(`${port}`);
    task.start();
});

app.get('/p',(req,res) => {
    res.status(200).send('ok');
});
