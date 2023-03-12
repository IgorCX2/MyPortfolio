import Link from 'next/link'
import { useEffect, useState } from 'react'
export default function HeaderSite(){
    const [theme, SetTheme] = useState(true)
    useEffect(() => {
        if(localStorage.getItem('USER-THEME') == "dark" || !localStorage.getItem('USER-THEME')){
            document.documentElement.classList.add('dark')
            SetTheme(true)
        }else{
            document.documentElement.classList.remove('dark')
            SetTheme(false)
        }
    }, [])
    return(
        <header className='relative flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center py-6'>
            <Link href={'/index'}>
                <h1 className='text-2xl dark:text-white'>&lt; Igor<strong className='text-dkwtblue'> Cortez</strong> &#47;&gt;</h1>
            </Link>
            <div className='flex items-center gap-4 md:gap-10'>
                <nav>
                    <ul className="flex gap-3 md:gap-5 dark:text-white font-medium">
                        <li>
                            <Link href={"/#sobre"}>Sobre</Link>
                        </li>
                        <li>
                            <Link href={"/#projetos"}>Projetos</Link>
                        </li>
                        <li>
                            <Link href={"/servicos"}>Serviços</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Empresa</Link>
                        </li>
                    </ul>
                </nav>
                <div onClick={() => {
                    if(localStorage.getItem('USER-THEME') == "light"){
                        localStorage.setItem('USER-THEME', 'dark')
                        document.documentElement.classList.add('dark')
                        SetTheme(true)
                    }else{
                        localStorage.setItem('USER-THEME', 'light')
                        document.documentElement.classList.remove('dark')
                        SetTheme(false)
                    }
                }}>{theme == false ? <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="stroke-black"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-black"></path></svg>: <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7"><path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-white"></path></svg>}
                </div>
            </div>
        </header>
    )
}