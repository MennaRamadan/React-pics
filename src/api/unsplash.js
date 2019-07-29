import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID b2fdb580836c784bdf51d3801f11471d1c02075a3c1a93dab44652d3617c0df1'
    }
})

 