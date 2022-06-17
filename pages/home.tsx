import React from 'react'
import Router from 'next/router'

interface Props {
  id: string
}

const home = ({ id }: Props) => {
  const handleClick = (e: React.FormEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    Router.back()
  }

  return (
    <div>
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