/* eslint-disable react/prop-types */
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"


const UrlsDisplay = ({ urls }) => {  
  const hostUrl = window.location.origin + '/'

  if (!urls){
    return (
      <></>
    )
  }

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
              <TableCell align="right"><a href={hostUrl + url.shortUrl}>{url.shortUrl}</a></TableCell>
              <TableCell align="right">{new Date(url.created).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UrlsDisplay