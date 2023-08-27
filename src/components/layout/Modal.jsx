import { useState } from 'react';
import { Button } from '../atomic/Button';

export const Modal = ({ action, children }) => {
    const [shouldShow, setShouldShow] = useState(false);

    const root = document.getElementById("root")
    const modal = document.getElementById("modal")


    const handleModalOpen = () => {
        setShouldShow(true).then(modal.after(root))
        root.classList.add("overflow-hidden")
        console.log("opened modal")
    }

    const handleModalClose = () => {
        setShouldShow(false)
        root.classList.remove("overflow-hidden")
    }

    return (
        <>
            <Button onClick={handleModalOpen} text={action} />
            {shouldShow && (
                <div id="modal" onClick={handleModalClose} className="fixed z-[1]left-0 top-0 w-full h-full overflow-auto bg-[#00000080]">
                    <div onClick={e => e.stopPropagation()} className="bg-white p-5 w-6/12 mx-auto my-[10%]">
                        <Button onClick={handleModalClose} text="Close" />
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}