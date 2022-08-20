import '../src/style/main.css';
import '../src/style/swiper.css';
import '../src/style/acc.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../src/style/normalize.css'
import {wrapper} from '../redux/store';
import Head from 'next/head'
function App({Component, pageProps}) {
    return <>
        <Head>
            <title>it-industrial</title>
            <link rel="icon" href="/icon-192x192.png"/>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
            <meta name="theme-color" content="#fff"/>
        </Head>
        <Component {...pageProps}/>
    </>

}

export default wrapper.withRedux(App)