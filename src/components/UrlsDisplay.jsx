import { useEffect, useState } from "react"
import urlService from '../urlService'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"


const UrlsDisplay = () => {
  const [urls, setUrls] = useState([])

  useEffect(() => {
    // Async method for fetching the urls from the server
    const initialiseUrls = async () => {
      const response = await urlService.getUrls()
      console.log('#################################')
      console.log(response.data)
      setUrls(response.data)
    }

    try {
      initialiseUrls()
    } catch (error) {
      window.alert('Couldnt connect to url server' + error.message)
    }
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: '200px' }} aria-label="simple table">
      <TableHead>
          <TableRow sx={{ backgroundColor: 'lightblue'}}>
            <TableCell>Original Url</TableCell>
            <TableCell align="right">Shortened Url</TableCell>
            <TableCell align="right">Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {urls.map(url => (
            <TableRow key={url.shortUrl}>
              <TableCell>{url.url}</TableCell>
              <TableCell align="right">{url.shortUrl}</TableCell>
              <TableCell align="right">{new Date(url.created).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UrlsDisplay