import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useProductsQuery } from '../generated/graphql'
import Header from '../components/Header'

export default function Home() {
  const [{ data }] = useProductsQuery({
    variables: {
      slug: 'unisex-long-sleeve-tee'
    }
  })
  return (
    <>
      <Header />
      <h1>Macacos</h1>
      <h1>{data?.products[0].name}</h1>
      <h1>{data?.products[0].description}</h1>
      <h1>{data?.products[0].price}</h1>
    </>

  )
}
