import React from 'react';
import {Form, Formik,} from 'formik';
//import {FormControl, FormLabel, Input} from "@chakra-ui/core"
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { Box, Button } from '@chakra-ui/react';
//import { useMutation } from 'urql';
import  {useRegisterMutation} from "../generated/graphql"

interface registerProps {}


     
    

     const Register: React.FC<registerProps> = ({}) =>{
         const [,register] = useRegisterMutation();
        return (
            <Wrapper variant = "small">
            <Formik initialValues = {{ username:"",password:""}}
            onSubmit={async (values,{setErrors}) => {
                    
                    const response = await  register(values);
                    if(response.data?.register.errors){
                      [{field:'username',message:'something wrong'}]
                      setErrors({
                         username:"hey Im an error",
                      });
                    }
            }}
          
                {({isSubmitting }) => (
                <Form>
                  <InputField name="username"
                    placeholder="username"
                    label="Username">
                  </InputField>
                  <Box mt={4}>
                    <InputField name="password"
                      placeholder="password"
                      label="Password"
                      type="password">
                    </InputField>
                  </Box>
                  <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="teal">Register</Button>
                </Form>

              )}
                  </Formik>
                    </Wrapper>
                
                
        );
    }
 
export default Register;