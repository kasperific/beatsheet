import { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Gallery = ({ children }) => {
    const elementRef = useRef(null);
    const [arrowDisable, setArrowDisable] = useState(true);

    const handleHorizantalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
            if (element.scrollLeft === 0) {
                setArrowDisable(true);
            } else {
                setArrowDisable(false);
            }
        }, speed);
    };
    return (
        <>
            <FaArrowLeft
                className="absolute inset-y-0 left-0 top-2/4 cursor-pointer hover:text-blue-500"
                onClick={() => {
                    handleHorizantalScroll(elementRef.current, 25, 300, -15);
                }}
                disabled={arrowDisable}
                aria-label="left arrow"
            />
            <FaArrowRight
                className="absolute inset-y-0 right-0 top-2/4 cursor-pointer hover:text-blue-500"
                onClick={() => {
                    handleHorizantalScroll(elementRef.current, 25, 300, 15);
                }}
                aria-label="right arrow"
            />
            <div className="grid overflow-x-scroll justify-start gap-x-8 grid-cols-[repeat(3,275px)] md:grid-cols-[repeat(3,300px)] grid-flow-col auto-cols-[300px] md:auto-cols-[300px] pb-8 w-full" ref={elementRef}>
                {children}
            </div>
        </>
    );
};