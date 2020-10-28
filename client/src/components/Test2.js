import React, { useState } from "react"

function Test2(){
    const [open, setOpen] = React.useState("bye");
    return(
        <div>
{open}
        </div>
    )
}

export default Test2