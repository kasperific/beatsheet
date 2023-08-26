import { useState } from "react";
import { Input } from "./atomic/Input";
import { FormProvider, useForm } from "react-hook-form";

export const AddBeat = ({onSave}) => {
    const [text, setText] = useState('');
    const [time, setTime] = useState('');
    const [content, setContent] = useState('');
    const [cameraAngle, setCameraAngle] = useState('');
    const [notes, setNotes] = useState('');

    const methods = useForm()

    const onSubmit = methods.handleSubmit(data => {
        console.log(data)
        // methods.reset()
        // setSuccess(true)
      })

    return (
        <FormProvider {...methods}>
        <form onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container">
            <Input
                name="name"
                label="Beat"
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
            
            
            <input type="submit" className="" value="Save Beat" />
        </form>
        </FormProvider>
      )
  }
