import "tailwindcss/tailwind.css"
import "../styles/global.css"
import type { AppProps } from 'next/app'
import { Provider } from 'urql'
import { client, ssr } from '../lib/urql'

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssr.restoreData(pageProps.urqlState)
  }

  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )

}

export default MyApp
