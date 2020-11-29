const url = "http://localhost:3001/cities";
const axios = require('axios');

export default {
    async findCities(name) {
        const params = {
            name_like: name,
        };
        return await axios.get(url, {params})
    },
}