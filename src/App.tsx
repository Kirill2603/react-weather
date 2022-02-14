import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import {Weather} from "./weather";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
        <ColorModeSwitcher />
        <Weather />
    </Box>
  </ChakraProvider>
)
