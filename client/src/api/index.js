import axios from 'axios';

const url = 'mongodb://fun:iWkhr5WdlFZypAgjIVlnObFcVaiWEEsRAlK2mV0O9DrKHCBvaDx6Iv4Sz8wjmHa8fFed30uWLQ8nc8Je4TVSIg==@fun.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@fun@/';
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
