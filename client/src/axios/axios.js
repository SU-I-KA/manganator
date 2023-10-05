import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://manganator.onrender.com/api',
})

export default instance
