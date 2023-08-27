export const Heading = ({ level, children }) => {
    return (
        <>
        {level == 1 && 
            <h1 className="text-3xl">{children}</h1>
        }
        {level == 2 && 
            <h2 className="text-2xl">{children}</h2>
        }
        {level == 3 && 
            <h3 className="text-xl">{children}</h3>
        }
        {level == 4 && 
            <h4 className="text-lg">{children}</h4>
        }
        </>
    )
    
  }
