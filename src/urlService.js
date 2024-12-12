import axios from 'axios'

const getUrls = async () => {
  const response = await axios.get('http://localhost:3000/api/urls')
  return response
}

const postUrl = async (urlToShorten) => {
  const response = await axios.post(urlToShorten)
  return response
}

export default { getUrls, postUrl }