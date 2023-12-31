import axios from 'axios'

export const BASE_URL = 'https://banquito-ws-cuentas-ntsumodxxq-uc.a.run.app/api/v1' /*'https://my.api.mockaroo.com/account-trx.json'; *//*'https://64ac56039edb4181202f712a.mockapi.io/';*/
export const BASE_URL_DEPOSIT = 'https://64b6cddfdf0839c97e1625e9.mockapi.io/deposits/';

export const ENDPOINTS = {
    accounts: 'accounts',
}

export const ENDPOINTSDEPOSIT = {
    deposit: 'deposit',
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL; /*endpoint + '/'*/
    return {
        fetch: (token) => axios.get(url, token),
        post: (newRecord, token) => axios.post(url, newRecord, token),
        put: (id, updatedRecord, token) => axios.put(url + id, updatedRecord, token),
        delete: id => axios.delete(url + id),
        fetchById: (id, token) => axios.get(url + id, token),
    }
}

export const createAPIEndpointDeposit = endpoint => {

    let url = BASE_URL_DEPOSIT + endpoint + '/';
    return {
        fetch: (token) => axios.get(url, token),
        post: (newRecord, token) => axios.post(url, newRecord, token),
        put: (id, updatedRecord, token) => axios.put(url + id, updatedRecord, token),
        delete: id => axios.delete(url + id),
        fetchById: (id, token) => axios.get(url + id, token),
    }
}