import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/core';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';


type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name : string;
    label : string;
    placeholder : string;
    ///**? is used to make any type optional */}
}
{/** type InputFieldProps will work as basic function which take props as argument */}


export const InputField: React.FC<InputFieldProps> = (props)=>{
    const [field , {error}] = useField(props); 
{/** useField is a part of formik   useField is a custom React hook that will automagically help you hook up inputs to Formik.*/}
    return(
        <FormControl isInvalid={!!error}>
{/** !! is to typecast string to boolean error is string and invalid only accept boolean  it will return false if error is '' and true if there is some error "error message"*/}
    <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
                <Input {...field} id={field.name} placeholder={props.placeholder} />{/**field.name is generic to all the id */}
                {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
              </FormControl>
    );
}