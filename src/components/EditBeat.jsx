import { useEffect, useState } from "react";
import { Input } from "./atomic/Input";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "./atomic/Button";
import { Heading } from "./atomic/Heading";
import axios from "axios";

export const EditBeat = ({ setShowModal, showModal, id }) => {
    const [beatName, setBeatName] = useState('');
    const [time, setTime] = useState('');
    const [content, setContent] = useState('');
    const [cameraAngle, setCameraAngle] = useState('');
    const [notes, setNotes] = useState('');

    const methods = useForm()
    const { handleSubmit } = useForm()
    
    console.log(id)

    useEffect(() => {

        axios.get(`api/beats/${id}`)
            .then(res => {
                setBeatName(res.data.name)
                setTime(res.data.time)
                setContent(res.data.content)
                setCameraAngle(res.data.cameraAngle)
                setNotes(res.data.notes)
            })
            .catch(error => {
                console.error(error);
            })
    }, [])


    const onSubmit = methods.handleSubmit(data => {

        console.log(data)

        axios.put(`api/beats/${id}`, data)
            .then(resp => {
                console.log(resp.data)
                setShowModal(false)
            }).catch(error => {
                if (error.response || error.request) {
                    console.log("There appears to be a problem. Please try again later!")
                } else {
                    console.log("Not found!")
                }
            })

    })

    return (
        <FormProvider {...methods}>
            <Heading className="mb-2" level={2}>Edit Beat</Heading>
            <form onSubmit={handleSubmit(onSubmit)}
                noValidate
                autoComplete="off"
                className="container">
                <Input
                    name="id"
                    type="hidden"
                    id="id"
                    value={id}
                />
                <Input
                    name="name"
                    label="Beat Name"
                    type="text"
                    id="name"
                    defaultValue={beatName}
                    placeholder="Beat name"
                />
                <Input
                    name="time"
                    label="Time"
                    type="text"
                    id="time"
                    defaultValue={time}
                    placeholder="Time"
                />
                <Input
                    name="content"
                    label="Content"
                    type="text"
                    id="content"
                    defaultValue={content}
                    placeholder="Content"
                />
                <Input
                    name="cameraAngle"
                    label="Camera angle"
                    type="text"
                    id="cameraAngle"
                    defaultValue={cameraAngle}
                    placeholder="Camera angle"
                />
                <Input
                    name="notes"
                    label="Notes"
                    type="text"
                    id="notes"
                    defaultValue={notes}
                    placeholder="Notes"
                />


                <Button type="submit" className="" text="Save Beat" />
            </form>
        </FormProvider>
    )
}
