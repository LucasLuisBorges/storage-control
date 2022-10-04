
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { SidebarProvider } from '../contexts/sidebarContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </ChakraProvider>
  )
}

export default MyApp
