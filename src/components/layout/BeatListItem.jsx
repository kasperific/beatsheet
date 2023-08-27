import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { Heading } from '../atomic/Heading';
import { useState } from 'react';
import axios from 'axios';
import { AddBeat } from '../AddBeat';
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'

export const BeatListItem = ({ beat }) => {
    const { name, time, content, cameraAngle, notes, id } = beat
    const [showModal, setShowModal] = useState(false)
    const [deleteBeat, setDeleteBeat] = useState(false)

    const handleDelete = (id) => {
        console.log("hit delete")
        axios.delete(`api/acts/beats/`, {
            data: { id: id }
        })
            .then(res => {
                console.log(res.data)
                console.log(`Deleted post with ID ${id}`);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleEdit = () => {
        setShowModal(true)
        // axios.put(`api/acts/beats/${id}`,)
    }

    return (
        <>
            <div className='p-5 bg-fuchsia-300 border relative text-left'>
                <div className='absolute right-0 top-0 flex'>
                    <p onClick={() => handleDelete(id)}><FaPencilAlt className="m-2 hover:text-blue-500" /></p>
                    <p><FaTimes onClick={() => handleEdit(id)} className="m-2 hover:text-blue-500" /></p>
                </div>

                <Heading level={4}>{name}</Heading>
                <p><strong>Time:</strong> {time}</p>
                <p><strong>Content:</strong> {content}</p>
                <p><strong>Camera Angle:</strong> {cameraAngle}</p>
                <p><strong>Notes:</strong> {notes}</p>
            </div>
            <Modal open={showModal} onClose={() => setShowModal(false)}>
                <ModalDialog
                    aria-labelledby="Add a New Beat"
                    variant="soft"
                    size="md"
                >
                    <AddBeat id={id} />
                </ModalDialog>
            </Modal>
            
        </>
    );
}