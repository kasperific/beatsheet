import axios from "axios"
import { BeatListItem } from "./BeatListItem"
import { List } from "./List"
import { useEffect, useState } from "react"
import { Modal } from "./Modal"
import { AddBeat } from "../AddBeat"
import { Heading } from "../atomic/Heading"


export const ActListItem = ({ acts }) => {
  const { name, id } = acts
  const [beats, setBeats] = useState([])

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
          setErrorMsg("Not a thing!")
        }
      })
  }, [])

  return (
    <>
    <Heading level={2}>Act {id}: {name}</Heading>
    <div className="flex place-items-center">
      <List  items={beats} resourceName="beat" itemComponent={BeatListItem} />
      <Modal action="Add Beat">
        <AddBeat />
      </Modal>
    </div>
    </>
  );
}