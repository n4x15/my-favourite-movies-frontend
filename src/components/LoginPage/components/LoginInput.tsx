import React from "react";
import TextField from "@mui/material/TextField"

const LoginInput = (props:any) => {
  return (
    <div>
      <TextField variant="outlined" value = {props.login} type="text" onChange={event => props.setInput(event.target.value)}/>
    </div>
  );
};

export default LoginInput;
