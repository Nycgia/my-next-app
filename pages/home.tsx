import React from 'react'
import Head from 'next/head'
import Router from 'next/router'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

interface Props {
  id: string
}

const home = ({ id }: Props) => {
  const handleClick = (e: React.FormEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    Router.push(prefix + '/')
  }

  return (
    <div>
      <Head>
        <title>Home Page ! 0030123012301230</title>
      </Head>
      
      <h1>H0m3 #{id}</h1>

      <a href={'/'} onClick={handleClick}>
        go back!
      </a>
    </div>
  )
}

interface IGetInitialProps {
  query: {
    id: string,
  }
}

home.getInitialProps = async ({ query }: IGetInitialProps) => {
  const {id} = query
  return {id}
}

export default home