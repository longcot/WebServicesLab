import axios from 'axios'

const question = axios.create({
    baseURL:'http://localhost:3100'
})

export default question