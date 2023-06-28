import axios from "axios";

export async function getData(endpoint) {
    let response = await axios.get(`https://www.jsonkeeper.com/${endpoint}`);
    return response.data;
}