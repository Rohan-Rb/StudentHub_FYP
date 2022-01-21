import TextField from '@mui/material/TextField';
import React from 'react'


export default function Input(props) {

    const {name, label, multiline, rows,error=null, value, onChange} = props;
    return (
        <TextField
            variant="outlined"
            multiline={multiline}
            rows={rows}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            
            // error
            // helperText="sad"
            {...(error && {error:true,helperText:error})}
        />
    )
}
