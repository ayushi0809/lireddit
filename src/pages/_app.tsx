import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import {Provider , createClient} from "urql";
import { deploy } from '../../url_new';

const client = createClient({
  url: deploy+"/graphql",
  fetchOptions:{
    credentials: "include"
  }
});
console.log(deploy)

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <Provider value = {client}>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
    </Provider>
  )
}

export default MyApp
