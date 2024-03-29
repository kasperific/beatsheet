import { useEffect, useState } from "react";
import { Input } from "./atomic/Input";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "./atomic/Button";
import { Heading } from "./atomic/Heading";
import axios from "axios";

export const AddBeat = ({ setShowModal, showModal, id }) => {


    const methods = useForm()

    const { handleSubmit } = useForm()
    
    console.log(id)

    const onSubmit = methods.handleSubmit(data => {

        console.log(data)
        axios.post(`api/acts/${id}/beats`, data)
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
            <Heading className="mb-2" level={2}>Add a Beat</Heading>
            <form onSubmit={handleSubmit(onSubmit)}
                noValidate
                autoComplete="off"
                className="container">
                <Input
                    name="name"
                    label="Beat Name"
                    type="text"
                    id="name"
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
