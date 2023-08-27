export const Heading = ({ level, className, children }) => {
    return (
        <>
        {level == 1 && 
            <h1 className={`text-3xl ${className}`}>{children}</h1>
        }
        {level == 2 && 
            <h2 className={`text-2xl ${className}`}>{children}</h2>
        }
        {level == 3 && 
            <h3 className={`text-xl ${className}`}>{children}</h3>
        }
        {level == 4 && 
            <h4 className={`text-lg ${className}`}>{children}</h4>
        }
        </>
    )
    
  }
