import axios from 'axios'

const getUrls = async () => {
  const response = await axios.get('/api/urls')
  return response
}

const postUrl = async (urlToShorten) => {
  const response = await axios.post('/api/shorten', {url: urlToShorten})
  return response
}

export default { getUrls, postUrl }