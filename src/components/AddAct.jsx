import { useState } from "react";
import { Input } from "./atomic/Input";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "./atomic/Button";
import { Heading } from "./atomic/Heading";
import axios from "axios";

export const AddAct = ({ setShowModal, id, showModal }) => {
    const [text, setText] = useState('');
    const [errorMsg, setErrorMsg] = useState("");
    const [error, setError] = useState(false);


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
                    setErrorMsg("There appears to be a problem. Please try again later!")
                } else {
                    setError(true)
                    setErrorMsg("Not a thing!")
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
                    // defaultValue=
                    placeholder="Act name"
                />
                
                <Button type="submit" className="" text="Save Act" />
            </form>
        </FormProvider>
    )
}
