import fetch from 'node-fetch';

const crawling = async (url) =>{
    console.log('time:', new Date());
    
    const response = await fetch('',{
        method: 'post',
        body: JSON.stringify(''),
        headers : {'Content-Type':'application/json'}
    });

}

export { crawling };