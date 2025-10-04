import axios from "axios";
const baseUrl = "http://localhost:3001/api/recipes";

const getAll = () => axios.get(baseUrl).then((res) => res.data);

const getOne = (id) => axios.get(`${baseUrl}/${id}`).then((res) => res.data);

const create = (recipe) => axios.post(baseUrl, recipe).then((res) => res.data);

const remove = (id) => axios.delete(`${baseUrl}/${id}`).then((res) => res.data);

export default { getAll, getOne, create, remove };
