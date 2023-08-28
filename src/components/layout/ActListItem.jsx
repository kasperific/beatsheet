import axios from "axios"
import { BeatListItem } from "./BeatListItem"
import { List } from "./List"
import { useEffect, useState } from "react"
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'
import { AddBeat } from "../AddBeat"
import { Heading } from "../atomic/Heading"
import { Button } from "../atomic/Button"
import { Gallery } from "../container/Gallery"


export const ActListItem = ({ acts }) => {
  const { name, id } = acts
  const [beats, setBeats] = useState([])
  const [showModal, setShowModal] = useState(false)


  useEffect(() => {
    axios.get(`api/acts/${id}/beats`)
      .then(resp => {
        console.log(resp.data)
        setBeats(resp.data)
      }).catch(error => {
        if (error.response || error.request) {
          setErrorMsg("There appears to be a problem. Please try again later!")
        } else {
          setError(true)
          setErrorMsg("Not found!")
        }
      })
  }, [showModal, setShowModal])


  return (
    <section className="mt-16 pb-16 px-4 md:px-8 border-b-8 relative" >
      <Heading className="mb-8" level={2}>Act {id}: {name}</Heading>
      <Gallery>
        {beats.length  &&
          <>
            <List items={beats} resourceName="beat" itemComponent={BeatListItem} />
            <Button className="rounded-full bg-fuchsia-500 hover:bg-fuchsia-400 h-48 w-48 self-center" text="Add a New Beat" onClick={() => setShowModal(true)} />
          </>
        }
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <ModalDialog
            aria-labelledby="Add a New Beat"
            variant="soft"
            size="md"
          >
            <AddBeat id={id} setShowModal={setShowModal} showModal={showModal} />
          </ModalDialog>
        </Modal>
      </Gallery>
    </section>
  );
}