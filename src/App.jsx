import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { List } from './components/layout/List';
import { ActListItem } from './components/layout/ActListItem';
import { Heading } from './components/atomic/Heading';
import { Button } from './components/atomic/Button';
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'
import { AddAct } from './components/AddAct';



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
  }, [showModal, setShowModal])


  const handleAddAct = () => {
    setShowModal(true)
  }

  if (acts == undefined) {
    return <div>Loading...</div>
  }

  return (
    <>
      <main className="max-w-screen-xl mx-auto my-0 px-8 pb-8">
      <Heading className="mb-8" level={1}>Create Your Beatsheet</Heading>
      <Button className="text-left" text="Add an Act" onClick={handleAddAct} />
        {acts && <List items={acts} resourceName="acts" itemComponent={ActListItem} />}
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <ModalDialog
            aria-labelledby="Add a New Act"
            variant="soft"
            size="md"
          >
            <AddAct id={acts.length + 1} setShowModal={setShowModal} showModal={showModal} />
          </ModalDialog>
        </Modal>
      </main>
    </>
  )
}

export default App
