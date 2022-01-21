import React, {useState} from 'react'
import { makeStyles } from '@mui/styles';


export function FormReuse(initialFieldValues) {


    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e =>{
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const reset = () => {
        setValues(initialFieldValues);
        setErrors({})
    }

    return {
        values,
        setValues,
        handleInputChange,
        errors,
        setErrors,
        reset
    }
}


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width:'100%',
            margin:theme.spacing(1)
        },

        '& .MuiButton-contained':{
            margin:theme.spacing(1),
            // backgroundColor: '#3dc21b',
            // color: '#000000',
            // cursor: 'pointer',
            // fontSize: '14px',
            // '&:hover': {
            // backgroundColor: '#5cdf2a',
            // }
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: "2px",
            borderColor: "black "
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '25ch',
        },
    },
}))

export function Form(props) {

    const classes = useStyles();
    const {children,...other} = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}

