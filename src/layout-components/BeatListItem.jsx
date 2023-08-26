
export const BeatListItem = ({ beat }) => {
    const { name, time, content, cameraAngle, notes } = beat

	return (
        <>
		<p>Beat: {name}</p>
        <p>Time: {time}</p>
        <p>Content: {content}</p>
        <p>Camera Angle: {cameraAngle}</p>
        <p>Notes: {notes}</p>
        </>
	);
}