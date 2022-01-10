import React from 'react'

const Home = (props) => {
    return (
        <div>
            <h1>Showing Details</h1>
            Name:
            { props.data.name
            
            }
              Email:
            { props.data.email
            
            }
              Address:
            { props.data.address
            
            }

PAssword:
            { props.data.password
            
            }
            
            
        </div>
    )
}

export default Home
