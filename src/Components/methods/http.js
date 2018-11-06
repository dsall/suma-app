import axios from 'axios';

const Link = 'https://fc72d3d1.ngrok.io/';

PostAPI = async (path, data) =>{
    try {
    const response = await axios.get(`${Link}${path}`, data);
        return response.data;
    }
    catch(err){
        console.log(err);
    }
}

GetAPI = async (path, data) =>{
    try {
    const response = await axios.get(`${Link}${path}`);
        return response.data;
    }
    catch(err){
        console.log(err);
    }
}