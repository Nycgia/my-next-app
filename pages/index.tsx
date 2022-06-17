import type { NextPage } from 'next'
import Image from 'next/image'
import Router from 'next/router'
import styles from '../styles/Home.module.css'

const prefix = '/my-next-app'

const Home: NextPage = () => {
  const handleClick = (e: React.FormEvent<HTMLAnchorElement>, id: string|number) => {
    e.preventDefault()
    Router.push({
      pathname: '/home',
      query: {
        id: typeof id === 'string' ? id : id.toString()
      },
    })
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello friend!
        </h1>

        <Image src={"/hackerman.jpg"} alt="Elliot" width={300} height={300} />

        <a href={prefix + '/home'} onClick={e => handleClick(e, 123)} className={styles.card}>
          go to home!
        </a>

        <a href={prefix + '/home'} onClick={e => handleClick(e, 'Holaa')} className={styles.card}>
          go to home 2!
        </a>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
