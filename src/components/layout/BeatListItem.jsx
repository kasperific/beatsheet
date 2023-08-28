import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { Heading } from '../atomic/Heading';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AddBeat } from '../AddBeat';
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'
import { EditBeat } from '../EditBeat';

export const BeatListItem = ({ beat }) => {
    const { name, time, content, cameraAngle, notes, id } = beat
    const [showModal, setShowModal] = useState(false)
    const [deleteBeat, setDeleteBeat] = useState(false)

    useEffect(() => {

        axios.get(`api/acts/${id}/beats`)
            .then(res => {
                console.log(res.data)
                console.log("id", id)
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    const handleDelete = (target) => {
        console.log("target", target)
        console.log("hit delete")

        axios.delete(`api/acts/beats/${target}`)
            .then(res => {
                console.log(res.data)
                console.log(`Deleted post with ID ${id}`);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleEdit = (target, id) => {
        console.log("target", target)
        console.log("id", id)
        setShowModal(true)
        // axios.put(`api/acts/beats/${id}`,)
    }

    return (
        <>
            <div className='p-5 bg-fuchsia-300 border relative text-left shadow-[5px_5px_0px_1px_rgb(200,200,200)]'>
                <div className='absolute right-6 top-6 flex'>
                    <p onClick={() => handleEdit(id)}><FaPencilAlt className="mr-3 hover:text-blue-500" /></p>
                    <p><FaTimes onClick={() => handleDelete(id)} className=" hover:text-blue-500" /></p>
                </div>

                <Heading level={4}>{name}</Heading>
                <p><strong>Time:</strong> {time}</p>
                <p><strong>Content:</strong> {content}</p>
                <p><strong>Camera Angle:</strong> {cameraAngle}</p>
                <p><strong>Notes:</strong> {notes}</p>
            </div>
            <Modal open={showModal} onClose={() => setShowModal(false)}>
                <ModalDialog
                    aria-labelledby={`Edit Beat ${id}`}
                    variant="soft"
                    size="lg"
                >
                    <EditBeat id={id} />
                </ModalDialog>
            </Modal>

        </>
    );
}