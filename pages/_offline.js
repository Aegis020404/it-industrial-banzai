import Head from 'next/head'

export default () => (
    <>
        <Head>
            <title>OFFLINE</title>
        </Head>
        <img src="/icon-512x512.png" alt=""/>
        <h1>Данная страница OFFLINE!</h1>
        <h2>У вас отключен интернет, посетите данную страницу с
             включенным интернетом, после этого она будет работать offline</h2>
    </>
)