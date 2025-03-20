import express from 'express';
import 'dotenv/config'


const app = express();

const port = process.env.PORT;

const myLogger = (req,res,next) => {
    console.log('t');
};

const time = (req,res,enxt) => {
    console.log('time:', new Date());
}


// app.use(myLogger);

app.use(time);

app.get('/',(req,res) => { res.sendStatus('')});

app.listen(port, () => {console.log(`${port}`)});

app.get('/p',(req,res) => {
    res.status(200).send('ok');
});

app.route('/').get().post().patch().delete();