import React from 'react';
import {Form, Formik,} from 'formik';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { Box, Button, Flex, Link } from '@chakra-ui/react';
import { toErrorMap } from '../utils/toErrorMap';
import NextLink from "next/link";
import login from "./login";



 const CreatePost: React.FC<{}> = ({}) => {
    return(
        <Wrapper variant = "small">
            <Formik initialValues = {{title: '' , text: ''}}
            onSubmit={async (values) => {
                 console.log(values)   
                    
            }}
            >
          
                {({ isSubmitting }) => (
                <Form>
                  <InputField name="title"
                    placeholder="title"
                    label="Title">
                  </InputField>
                  <Box mt={4}>
                    <InputField 
                      textarea
                      name="text"
                      placeholder="text..."
                      label="Body">
                    </InputField>
                  </Box>
                  <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="teal"> Create Post </Button>
                </Form>

              )}
                  </Formik>
                    </Wrapper>
    );
}
export default CreatePost;