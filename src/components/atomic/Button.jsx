export const Button = ({ text, onClick, className }) => {
    return <button onClick={onClick} className={`button hover:bg-slate-700 text-white ${className}`} >{text}</button>
  }
