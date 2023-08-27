import { useEffect, useState } from "react";
import { Input } from "./atomic/Input";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "./atomic/Button";
import { Heading } from "./atomic/Heading";
import axios from "axios";

export const AddBeat = ({ setShowModal, showModal, id }) => {
    const [text, setText] = useState('');
    const [time, setTime] = useState('');
    const [content, setContent] = useState('');
    const [cameraAngle, setCameraAngle] = useState('');
    const [notes, setNotes] = useState('');
    const [errorMsg, setErrorMsg] = useState("");
    const [error, setError] = useState(false);


    const methods = useForm()

    console.log(id)
    const { handleSubmit } = useForm()


    const onSubmit = methods.handleSubmit(data => {

        console.log(data)
        axios.post(`api/acts/${id}/beats`, data)
            .then(resp => {
                console.log(resp.data)
                setShowModal(false)
                console.log(showModal)
                // let parent know data has been updated

            }).catch(error => {
                if (error.response || error.request) {
                    setErrorMsg("There appears to be a problem. Please try again later!")
                } else {
                    setError(true)
                    setErrorMsg("Not a thing!")
                }
            })
    })

    return (
        <FormProvider {...methods}>
            <Heading level={2}>Add a Beat</Heading>
            <form onSubmit={handleSubmit(onSubmit)}
                noValidate
                autoComplete="off"
                className="container">
                <Input
                    name="name"
                    label="Beat"
                    type="text"
                    id="name"
                    // defaultValue=
                    placeholder="Beat name"
                />
                <Input
                    name="time"
                    label="Time"
                    type="text"
                    id="time"
                    placeholder="Time"
                />
                <Input
                    name="content"
                    label="Content"
                    type="text"
                    id="content"
                    placeholder="Content"
                />
                <Input
                    name="cameraAngle"
                    label="Camera angle"
                    type="text"
                    id="cameraAngle"
                    placeholder="Camera angle"
                />
                <Input
                    name="notes"
                    label="Notes"
                    type="text"
                    id="notes"
                    placeholder="Notes"
                />


                <Button type="submit" className="" text="Save Beat" />
            </form>
        </FormProvider>
    )
}
