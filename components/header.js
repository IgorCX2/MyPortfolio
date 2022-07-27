import Link from 'next/link'
function Header(){
    return(
        <>
            <header className="relative w-full flex items-center justify-between py-7 z-10">
                <div className="flex items-center">
                    <div>
                        <h1 className='text-2xl text-white'>&lt; Igor<strong className='text-dkwtblue'> Cortez</strong> &#47;&gt;</h1>
                    </div>
                </div>
                <div className="flex gap-8 font-medium text-white">
                    <Link href="/">Home</Link>
                    <Link href="/">Sobre</Link>
                    <Link href="/">Habilidades</Link>
                    <Link href="/">Projetos</Link>
                </div>
            </header>
        </>
    )
} 
export default Header;