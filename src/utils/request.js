import axios from 'axios';
import { resolve } from 'path';

const get = (url, data) => {
    return new Promise((resolve, reject) => {
        return axios.get(url, {
                params: data
            }).then((res) => {
            resolve(res.data.d);
        }).catch((err) => {
            reject(err);
        })
    })
}

const post = (url, data) => {
    return new Promise((resolve, reject) => {
        return axios.post(url, {
            params: data
        }).then((res) => {
            resolve(res.data.d);
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports = {
    get,
    post
}

// https: //timeline-merger-ms.juejin.im/v1/get_entry_by_rank?src=web&uid=57977251d342d30059046c65&device_id=1539774140805&token=eyJhY2Nlc3NfdG9rZW4iOiJUQzdiNElCN2R3RkZQeEh4IiwicmVmcmVzaF90b2tlbiI6IllLOWpocnFsVldCTFJCSG4iLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ%3D%3D&limit=20&category=5562b415e4b00c57d9b94ac8