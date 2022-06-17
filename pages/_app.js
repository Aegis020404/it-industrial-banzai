import '../src/style/main.css';
import '../src/style/swiper.css';
import '../src/style/acc.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../src/style/normalize.css'
import {wrapper} from '../redux/store';

function App ({Component, pageProps}) {
    return <Component {...pageProps}/>
}

export default wrapper.withRedux(App)