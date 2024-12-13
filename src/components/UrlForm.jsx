/* eslint-disable react/prop-types */

import { TextField, Button } from "@mui/material"
import { useState } from "react"
import { z } from 'zod'
import urlService from "../urlService"

const UrlForm = ({ addOne, notify }) => {
  const [urlInput, setUrlInput] = useState('')
  const [inputError, setInputError] = useState(false)
  const [helperText, setHelperText] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    console.log()
    if (!inputError) {
      try {
        const response = await urlService.postUrl(urlInput)
        if (response.data){
          addOne(response.data)
          notify({
            message: 'Succeeded in adding url: ' + response.data.url,
            severity: 'success',
            duration: 4
          })
          setUrlInput('')
        }
      } catch (error) {
        notify({
          message: 'An error occured adding the url: ' + error.message,
          severity: 'error',
          duration: 4
        })
      }
    }
  }

  const isUrl = (text) => {
    return z.string().url().safeParse(text).success
  }

  const onChange = (event) => {
    const newValue = event.target.value
    setUrlInput(newValue)

    if (!isUrl(newValue)){
      if (!inputError){
        setInputError(true)
        setHelperText('Incorrect url format')
      }
    } else if (inputError) {
      setInputError(false)
      setHelperText('')
    }
    
  }
  return (
    <form  style={{marginTop: '10px'}} onSubmit={onSubmit}>
      <div>
        <TextField helperText={helperText} onChange={onChange} error={inputError} value={urlInput} fullWidth id="standard-basic" label="Url to shorten" variant="outlined" />
      </div>
      <div style={{marginTop: '5px'}}>
        <Button type="submit" variant="contained">Add</Button>  
      </div>

    </form>
  )
}

export default UrlForm