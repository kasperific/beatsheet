export const Button = ({ text, onClick, className }) => {
    return <button onClick={onClick} className={`button text-white ${className}`} >{text}</button>
  }
