import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import '@/styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
