import '../styles/globals.css'
import Header from '../components/header'
import Container  from '../components/container'
import Footer from '../components/footer'
function MyApp({ Component, pageProps }) {
  return(
    <>
      <div className='w-full min-h-screen h-full bg-fundo '>
        <Container>
          <Header/>
          <Component {...pageProps} />
        </Container>
        <Footer/>
      </div>
    </>
  ) 
}
export default MyApp