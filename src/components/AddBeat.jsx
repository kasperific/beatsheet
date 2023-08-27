import { useState } from "react";
import { Input } from "./atomic/Input";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "./atomic/Button";

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
            <h2>Add a Beat</h2>
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
            
            
            <Button type="submit" className="" text="Save Beat" />
        </form>
        </FormProvider>
      )
  }
