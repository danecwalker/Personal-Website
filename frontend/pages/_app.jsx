import Layout from '../components/layout'
import '../styles/globals.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
