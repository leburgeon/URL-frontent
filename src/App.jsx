import { Container, Alert } from "@mui/material"
import UrlsDisplay from "./components/urlsDisplay"
import UrlForm from "./components/UrlForm"
import { useState, useEffect } from "react"
import urlService from "./urlService"

const App = () => {
  const [urls, setUrls] = useState([])
  const [alertMessage, setAlertMessage] = useState(null)

  const notify = (notification) => {
    const { message, severity, duration } = notification
    setAlertMessage({message, severity})
    setTimeout(() => {
      setAlertMessage(null)
    }, duration * 1000);
  }

  const addOne = (url) => {
    setUrls(urls.concat(url))
  }

  useEffect(() => {
    // Async method for fetching the urls from the server
    const initialiseUrls = async () => {
      const response = await urlService.getUrls()
      setUrls(response.data)
    }

    try {
      initialiseUrls()
    } catch (error) {
      window.alert('Couldnt connect to url server' + error.message)
    }
  }, [])

  return (
    <Container>
      {alertMessage && <Alert severity={alertMessage.severity}>{alertMessage.message}</Alert>}
      <UrlsDisplay urls={urls}/>
      <UrlForm notify={notify} addOne={addOne}/>
    </Container>
  )
}

export default App