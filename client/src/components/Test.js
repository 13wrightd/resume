import React, { useState } from "react"

function Test(){
    const [open, setOpen] = React.useState("Hello");
    return(
        <div>
            {open}
        </div>
    )
}

export default Test