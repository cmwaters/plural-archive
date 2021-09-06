import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plural</title>
        <meta name="description" content="Validator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.inner}>
          <div className={styles.text_box}>
            <h1 className={styles.title}>
              Plural
            </h1>

            <p className={styles.button}>
              <a href="https://wallet.keplr.app/#/osmosis/stake?modal=detail&validator=osmovaloper1f6taewxze2sxang7293dff6qju4r4uwg7znp6j">DELEGATE</a>
            </p>
          </div>

          <div className={styles.img_box}>
            <Image src="/plural.svg" alt="Plural Logo" width={500} height={500}/>
          </div>

          <div className={styles.vertical_label}>
            COMMUNITY & CONSENSUS
          </div>
        </div>

      </main>
    </div>
  )
}

export default Home
