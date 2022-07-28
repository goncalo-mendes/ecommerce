import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql';

const isServerSide = typeof window === 'undefined'
const ssr = ssrExchange({ isClient: !isServerSide });

const client = createClient({
  url: 'https://api-eu-central-1.hygraph.com/v2/cl6530gzd8qck01ukgduwgg6s/master',
  exchanges: [dedupExchange, cacheExchange, ssr, fetchExchange]
})

export { client, ssr };

