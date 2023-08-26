import axios from "axios"
import { BeatListItem } from "./BeatListItem"
import { List } from "./List"
import { useEffect, useState } from "react"


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
                  setErrorMsg("Can't find that word!")
              }
            })
      },[])

	return (
        <>
		<h3>Act {id}: {name}</h3>
        <List items={beats} resourceName="beat" itemComponent={BeatListItem} />
        </>
	);
}