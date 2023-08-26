import React, { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'
import { List } from './layout-components/List';
import { ActListItem } from './layout-components/ActListItem';



function App() {
  const [acts, setActs] = useState([])

  useEffect(() => {
    axios.get('api/acts')
         .then(resp => {
           console.log(resp.data)
          setActs(resp.data)
         }).catch(error => {
          if (error.response || error.request) {
            setErrorMsg("There appears to be a problem. Please try again later!")
          } else {
              setError(true)
              setErrorMsg("Can't find that word!")
          }
        })
  },[])

  if (acts == undefined) {
    return <div>Loading...</div>
  }

  return (
    <>
      {acts && <List items={acts} resourceName="acts" itemComponent={ActListItem} />}
        
    </>
  )
}

export default App
