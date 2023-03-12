import Container from '../components/container'
import Footer from '../components/footer'
import HeaderSite from '../components/header'
import '../styles/globals.css'
export default function MyApp({ Component, pageProps}){
    return(
        <div className='w-full min-h-screen h-full bg-white dark:bg-fundo overflow-hidden'>
            <Container>
                <HeaderSite/>
                <Component {...pageProps} />
            </Container>
            <Footer/>
        </div>
    )
}