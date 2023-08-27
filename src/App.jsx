import React, { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'
import { List } from './components/layout/List';
import { ActListItem } from './components/layout/ActListItem';
import { AddBeat } from './components/AddBeat';
import { Modal } from './components/layout/Modal';
import { Heading } from './components/atomic/Heading';
import { Button } from './components/atomic/Button';



function App() {
  const [acts, setActs] = useState([])
  const [showModal, setShowModal] = useState(false)

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
  }, [])

  if (acts == undefined) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Heading className="mb-8" level={1}>Create a Beatsheet</Heading>
      <Button text="Add an Act" />
      <main className="max-w-screen-xl text-center mx-auto my-0 px-8 pb-8">
        {acts && <List items={acts} resourceName="acts" itemComponent={ActListItem} />}
      </main>
    </>
  )
}

export default App
