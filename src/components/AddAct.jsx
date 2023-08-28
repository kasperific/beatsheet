import { useState } from "react";
import { Input } from "./atomic/Input";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "./atomic/Button";
import { Heading } from "./atomic/Heading";
import axios from "axios";

export const AddAct = ({ setShowModal, id, showModal }) => {


    const methods = useForm()


    const { register, handleSubmit, errors, control } = useForm()


    const onSubmit = methods.handleSubmit(data => {
        data.id = id

        console.log(data)
        axios.post(`api/acts/`, data)
            .then(resp => {
                console.log(resp.data)
                
                setShowModal(false)
                console.log(showModal)
                // close the modal
                // let parent know data has been updated
                
                // setBeats(resp.data)
            }).catch(error => {
                if (error.response || error.request) {
                    console.log("error",error)
                } else {
                    console.log("other error",error)
                }
            })
    })

    return (
        <FormProvider {...methods}>
            <Heading level={2}>Add an Act</Heading>
            <form onSubmit={handleSubmit(onSubmit)}
                noValidate
                autoComplete="off"
                className="container">
                <Input
                    name="name"
                    label="Act Name"
                    type="text"
                    id="name"
                    placeholder="Act name"
                />
                
                <Button type="submit" className="" text="Save Act" />
            </form>
        </FormProvider>
    )
}
