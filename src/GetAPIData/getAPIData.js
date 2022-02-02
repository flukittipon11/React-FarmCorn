import axios from 'axios';

const URL = 'http://localhost:3001/getdata';

export const getAPIData = async () => {
    const { data } = await axios.get(URL, {
    });

    return data;
}