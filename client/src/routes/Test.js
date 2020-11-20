import React from "react"
import { Paper, Button, Grid, Hidden, TextField, Typography, Box} from "@material-ui/core"
import Login from "../components/Login.js"
const privateFetch = async () => {
  
    const response = await fetch(
        "/api/private", 
        {
          credentials: 'include',
          method: "post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          //make sure to serialize your JSON body
          body: JSON.stringify({
          })
        }
    );
    const data = await response.json();
    // setData(data.hits);
    // setStatus('fetched');
    console.log(data)
  };
function Test(){
    const [showLoginPage, setShowLoginPage] = React.useState(true);
    return (
    <div>
        {showLoginPage ? <Paper> <Login /></Paper>: null}
        <Button  onClick={privateFetch} color="primary" variant="contained"> Protected </Button>
        <Button  onClick={()=>setShowLoginPage(!showLoginPage)} color="primary" variant="contained"> show login </Button>
    </div>

    )
}
export default Test