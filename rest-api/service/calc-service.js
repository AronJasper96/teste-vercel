import axios from 'axios';

const propertyCalc = async () =>{
    try {
        const request = await axios({
            method: 'GET',
            url: `${process.env.API_VALUE}/v1/value/meters`,
            timeout: 500000,
            headers: {'Content-Type':'application/json'},
            json:true,
        })
        return request.data;
    } catch (error) {
        return error;
    }
}

export {propertyCalc};