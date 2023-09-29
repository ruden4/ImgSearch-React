import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = "38794052-11ed7c3031d83bd0448aacf33";
const paramsObj = { image_type: "photo", orientation: "horizontal", per_page: 12, key: API_KEY }
const defParams = new URLSearchParams(paramsObj);

export const getRequestData = async (requestVal, pageNumber) => {
    const { data }  = await axios.get(`/?q=${requestVal}&page=${pageNumber}&${defParams}`)
    return data;
};