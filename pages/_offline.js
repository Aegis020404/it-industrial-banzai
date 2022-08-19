import Head from 'next/head'
import cl from '/src/style/offline.module.css'

export default () => (
    <>
        <Head>
            <title>it-industrial</title>
        </Head>
        <div className={cl.container}>
            <img src="/icon-256x256.png" alt=""/>
            <h1>Данная страница OFFLINE!</h1>
            <h2>У вас отключен интернет, посетите данную страницу с
                включенным интернетом, после этого она будет работать offline</h2>
        </div>
    </>
)