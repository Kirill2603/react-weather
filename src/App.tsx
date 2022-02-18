import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import {Weather} from "./weather";
import {Maps} from "./store/maps";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
        <Weather />
        <Maps/>
    </Box>
  </ChakraProvider>
)
