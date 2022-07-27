import Link from 'next/link'
import Container from './container';
function Footer(){
    return(
        <>
            <footer className='w-full py-4 bg-telapro mt-44 text-white'>
                <Container>
                    <p className='text-center'>Desenvolvido com muita dedicação por <span className='text-dkwtblue font-bold'><Link href="/">IgorCX2</Link></span></p>
                </Container>
                
            </footer>
        </>
    )
} 
export default Footer;