import React from 'react';
import {Form, Formik,} from 'formik';
//import {FormControl, FormLabel, Input} from "@chakra-ui/core"
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { Box, Button } from '@chakra-ui/react';
import { useMutation } from 'urql';

interface registerProps {
}

     const REGISTER_MUT = `# Write your query or mutation here
     mutation Register($username: String!, $password: String!) {
       register(options: { username: $username, password: $password }) {
         errors {
           field
           message
         }
         user {
           id
           username
         }
       }
     }
     ` 
    

     const Register: React.FC<registerProps> = ({}) =>{
         const [,register] = useMutation(REGISTER_MUT);
        return (
            <Wrapper variant = "small">
            <Formik initialValues = {{ username:"",password:""}}
            onSubmit={(values) => {
                    console.log(values);
                    register(values);
            }}
            >
                {({isSubmitting}) => (
                        <Form>
                       <InputField name = "username" 
                                    placeholder = "username" 
                                    label = "Username">
                       </InputField>
                       <Box mt = {4}>
                       <InputField name = "password" 
                                    placeholder = "password" 
                                    label = "Password"
                                    type = "password">
                       </InputField>
                       </Box>
                       <Button mt = {4} type = "submit" isLoading={isSubmitting}  colorScheme = "teal" >Register</Button>
                        </Form>
                        
                )}
                    </Formik>
                    </Wrapper>
                
                
        );
    }
 
export default Register;