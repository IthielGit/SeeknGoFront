import httpClient from '../../connection/http-common.js';

const getAll = ()=>{
    return httpClient.get('/reservation/list');
}


export default {getAll};