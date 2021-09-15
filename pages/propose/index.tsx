import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Layout } from 'antd';
import styles from '../../styles/Propose.module.css'

const { Header, Content } = Layout

const Propose: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Plural | Propose</title>
            </Head>
            <Layout>
                <Header style={{margin: '20px'}}>
                    <table style={{width: '100%'}}>
                        <td>
                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <Image src="/plural.svg" alt="Plural Logo" width={48} height={48}/>
                                <h5 className={styles.title}>Plural</h5>
                            </div>
                        </td>
                        <td>
                            <div style={{float: 'right'}}>
                                WALLET
                            </div>
                        </td>
                    </table>
                </Header>
                <Content>

                </Content>
            </Layout>
        </div>
    )
}

// const connect = async () => {
//   if (!window.keplr || !window.getOfflineSigner) {
//     alert("Please install the Keplr Extension")
//   } else {
//     const chainId = "osmosis-1"
//     window.keplr.enable(chainId)

//     const offlineSigner = window.getOfflineSigner(chainId)
//     const accounts = await offlineSigner.getAccounts();
//     alert("Connected to " + accounts[0].address)
//   }
// }

export default Propose;