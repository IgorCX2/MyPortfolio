import Link from 'next/link'

export default function Footer(){
    return(
        <>
            <footer className='relative w-full py-4 bg-white drop-shadow-2xl dark:bg-telapro mt-16 dark:text-white'>
                <p className='text-center'>Desenvolvido com muita dedicação por <span className='text-dkwtblue font-bold'><Link href="/">IgorCX2</Link></span></p>
            </footer>
        </>
    )
} 