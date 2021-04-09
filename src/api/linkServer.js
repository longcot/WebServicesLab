import axios from 'axios'

const linkServer = axios.create({
    baseURL:'http://localhost:3000'
})

export default linkServer