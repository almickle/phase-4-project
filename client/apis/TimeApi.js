import axios from 'axios';

export default axios.create({
    baseUrl: "http://worldtimeapi.org/api/timezone/America/"  
})