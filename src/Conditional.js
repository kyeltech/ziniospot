import React from 'react'

function Conditional(props) {
    console.log(props.isLoading)
    if (props.isLoading === true) {
        return(
            <h1>loading....</h1>
        )
        } else {
    return(
            <h1>
                go on  nothing last forever as far as you can breatheee
            </h1>
    )
    }
}

export default Conditional