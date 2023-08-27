import { FaPencilAlt, FaTimes } from 'react-icons/fa';

export const BeatListItem = ({ beat }) => {
    const { name, time, content, cameraAngle, notes } = beat

	return (
        <div className='w-[200px] border-fuchsia-300 border'>
          <p><FaTimes onClick={() => onDelete(task.id)} className="" /></p>
          <p><FaPencilAlt onClick={() => onEdit(task.id)} className="" /></p>

            <p>Beat: {name}</p>
            <p>Time: {time}</p>
            <p>Content: {content}</p>
            <p>Camera Angle: {cameraAngle}</p>
            <p>Notes: {notes}</p>
        </div>
	);
}