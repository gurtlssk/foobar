import fetch from 'node-fetch';

const crawling = (url) =>{
    console.log('time:', new Date());
    
    const response =  fetch('',{
        method: 'post',
        body: JSON.stringify(''),
        headers : {'Content-Type':'application/json'}
    });

}

export { crawling };