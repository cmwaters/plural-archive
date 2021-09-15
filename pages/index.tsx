import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plural</title>
        <meta name="description" content="Validator for Cosmos Chains" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.inner}>
          <div className={styles.text_box}>
            <h1 className={styles.title}>
              Plural
            </h1>

            <p className={styles.button}>
              <Link href="/propose">
                CONNECT
              </Link>
            </p>
          </div>

          <div className={styles.img_box}>
            <Image src="/plural.svg" alt="Plural Logo" width={500} height={500}/>
          </div>

          <div className={styles.vertical_label}>
            <span>BUILD CONSENSUS</span> 
            <div id={styles.circle}></div>
            <span>BUILD COMMUNITY</span> 
          </div>
        </div>

      </main>
    </div>
  )
}

export default Home
