import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

interface Props {
  id: string
}

const home = ({ id }: Props) => {
  return (
    <div>
      <Head>
        <title>Home Page ! 0030123012301230</title>
      </Head>
      
      <h1>H0m3 #{id}</h1>

      <Link href='/'>
        <a>Go back!</a>
      </Link>
    </div>
  )
}

interface IGetInitialProps {
  query: {
    id: string,
  }
}

home.getInitialProps = async ({ query }: IGetInitialProps) => {
  const { id } = query
  return { id }
}

export default home