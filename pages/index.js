import Link from "next/link";
import Image from 'next/image'
const imageLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
}
export default function Home({imageLoader}){
    return(
        <main className="relative w-full md:mt-28 mt-10">
            <section className="relative flex justify-center md:justify-between w-full flex-warp gap-10 flex-col md:flex-row">
                <div className="relative flex flex-col gap-10 dark:text-white max-w-2xl items-center md:items-start">
                    <h1 className="text-4xl text-center md:text-left md:text-5xl 2xl:text-6xl font-extrabold leading-tight">Olá, eu sou o<span className="text-dkwtblue"> &#123;Igor&#125;</span>. Um desenvolvedor Front-end | Back-end</h1>
                    <div className="flex relative z-20">
                        <Link href={'https://www.linkedin.com/in/igorctz/'}>
                            <button className='flex items-center gap-2 bg-dkwtblue rounded-lg px-4 py-1.5 text-white'>
                                <div>
                                    <Image
                                        loader={imageLoader}
                                        src={'logo-linkedin.svg'}
                                        alt='logo ver linkedin'
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                    Linkedin
                            </button>
                        </Link>
                        <Link href={'https://download1336.mediafire.com/2joebqk0xqogDN3UuLvoQHCkZQOmae94AnuYGOlGnC5DC1BL87W-DFYx7jtKQ4gv3jfMrYfbH1KnLmn1RrpvttksAMlJ/ok2hexeyk4elhzs/HABILIDADES.pdf'}>
                            <button className='flex items-center gap-2 rounded-lg border px-4 py-1.5 ml-8'>
                                <div className="brightness-75 dark:brightness-100">
                                    <Image
                                        loader={imageLoader}
                                        src={'cloud-download-outline.svg'}
                                        alt='logo baixar curriculo'
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                Curriculo
                            </button>
                        </Link>
                    </div>
                    <div className="absolute -z-20 -top-52 -left-24 lg:left-0 lg:top-32 blur-3xl">
                        <div className="w-56 h-56 rounded-full bg-bluedkblr/50 absolute"></div>
                        <div className="w-56 h-56 rounded-full bg-bluewtblr/50 absolute top-28 -right-10"></div>
                        <div className="w-56 h-56 rounded-full bg-dkwtblue/50 absolute top-56 -right-52"></div>
                    </div>
                </div>
                <div className="relative dark:text-white w-full">
                    <div className="absolute top-0 lg:-top-32 right-10 blur-3xl">
                        <div className="w-56 h-56 rounded-full bg-bluedkblr/80 absolute"></div>
                        <div className="w-56 h-56 rounded-full bg-bluewtblr/80 absolute top-28 -right-10"></div>
                        <div className="w-56 h-56 rounded-full bg-dkwtblue/80 absolute top-56 -right-52"></div>
                    </div>
                    <div className="relative hover:z-10 backdrop-blur-xl w-full h-96 dark:bg-telapro/40 bg-gray-100/10 border drop-shadow-2xl rounded-lg dark:border-gray-600 lg:px-10 px-4 py-5 flex-col">
                        <div className="flex gap-5">
                            <div className="w-4 h-4 rounded-full bg-gray-300"/>
                            <div className="w-4 h-4 rounded-full bg-gray-300"/>
                            <div className="w-4 h-4 rounded-full bg-gray-300"/>
                        </div>
                        <div className="w-full h-0.5 bg-gray-300 dark:bg-gray-600 mt-3.5 mb-5"></div>
                        <div className="">
                            <p>&lt;<span className="text-red-600 dark:text-pink-600">body</span>&gt;</p>
                            <p className="ml-1 sm:ml-6">&lt;<span className="text-red-600 dark:text-pink-600">h1</span>&gt;<span>Habilidades</span>&lt;&#47;<span className="text-red-600 dark:text-pink-600">h1</span>&gt;</p>
                            <p className="ml-2">&lt;<span className="text-red-600 dark:text-pink-600">ol</span>&gt;</p>
                            <div className="ml-4">
                                <p>&lt;<span className="text-red-600 dark:text-pink-600">li</span><span className="text-green-600 dark:text-emerald-400 hidden sm:inline"> class</span><span className="text-red-600 dark:text-pink-600 hidden sm:inline">=</span><span className="text-yellow-500 dark:text-amber-200 hidden sm:inline">"inter"</span>&gt;<span>html5</span>&lt;&#47;<span className="text-red-600 dark:text-pink-600">li</span>&gt;</p>
                                <p>&lt;<span className="text-red-600 dark:text-pink-600">li</span><span className="text-green-600 dark:text-emerald-400 hidden sm:inline"> class</span><span className="text-red-600 dark:text-pink-600 hidden sm:inline">=</span><span className="text-yellow-500 dark:text-amber-200 hidden sm:inline">"inter"</span>&gt;<span>css3</span>&lt;&#47;<span className="text-red-600 dark:text-pink-600">li</span>&gt;</p>
                                <p>&lt;<span className="text-red-600 dark:text-pink-600">li</span><span className="text-green-600 dark:text-emerald-400 hidden sm:inline"> class</span><span className="text-red-600 dark:text-pink-600 hidden sm:inline">=</span><span className="text-yellow-500 dark:text-amber-200 hidden sm:inline">"inter"</span>&gt;<span>javascript</span>&lt;&#47;<span className="text-red-600 dark:text-pink-600">li</span>&gt;</p>
                                <p>&lt;<span className="text-red-600 dark:text-pink-600">li</span><span className="text-green-600 dark:text-emerald-400 hidden sm:inline"> class</span><span className="text-red-600 dark:text-pink-600 hidden sm:inline">=</span><span className="text-yellow-500 dark:text-amber-200 hidden sm:inline">"inter"</span>&gt;<span>php</span>&lt;&#47;<span className="text-red-600 dark:text-pink-600">li</span>&gt;</p>
                                <p>&lt;<span className="text-red-600 dark:text-pink-600">li</span><span className="text-green-600 dark:text-emerald-400 hidden sm:inline"> class</span><span className="text-red-600 dark:text-pink-600 hidden sm:inline">=</span><span className="text-yellow-500 dark:text-amber-200 hidden sm:inline">"inter"</span>&gt;<span>mysql</span>&lt;&#47;<span className="text-red-600 dark:text-pink-600">li</span>&gt;</p>
                                <p>&lt;<span className="text-red-600 dark:text-pink-600">li</span><span className="text-green-600 dark:text-emerald-400 hidden sm:inline"> class</span><span className="text-red-600 dark:text-pink-600 hidden sm:inline">=</span><span className="text-yellow-500 dark:text-amber-200 hidden sm:inline">"inter"</span>&gt;<span>next</span>&lt;&#47;<span className="text-red-600 dark:text-pink-600">li</span>&gt;</p>
                                <p>&lt;<span className="text-red-600 dark:text-pink-600">li</span><span className="text-green-600 dark:text-emerald-400 hidden sm:inline"> class</span><span className="text-red-600 dark:text-pink-600 hidden sm:inline">=</span><span className="text-yellow-500 dark:text-amber-200 hidden sm:inline">"inter"</span>&gt;<span>node</span>&lt;&#47;<span className="text-red-600 dark:text-pink-600">li</span>&gt;</p>
                                <p>&lt;<span className="text-red-600 dark:text-pink-600">li</span><span className="text-green-600 dark:text-emerald-400 hidden sm:inline"> class</span><span className="text-red-600 dark:text-pink-600 hidden sm:inline">=</span><span className="text-yellow-500 dark:text-amber-200 hidden sm:inline">"inter"</span>&gt;<span>react</span>&lt;&#47;<span className="text-red-600 dark:text-pink-600">li</span>&gt;</p>
                            </div>
                            <p className="ml-2">&lt;&#47;<span className="text-red-600 dark:text-pink-600">ol</span>&gt;</p>
                        </div>
                    </div>
                    <div className="absolute lg:block hidden w-96 h-56 dark:bg-telapro border rounded-lg drop-shadow-2xl bg-gray-100 dark:border-gray-600 px-10 py-5 -right-10 top-64">
                        <p><span className="text-red-600 dark:text-pink-600">Try</span> &#123;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;// Olá, seja bem-vindo ao meu site. Eu me chamo<span className="text-dkwtblue"> Igor Cortez</span> e sou apaixonado por tecnologia desde os meus 13 anos de idade. Desde então, decidi trilhar o caminho da programação e aprender mais sobre este maravilhoso mundo.</p>
                    </div>
                </div>
            </section>
            <section id="sobre" className="flex md:flex-row flex-col justify-center md:justify-start gap-10 md:gap-20 items-center md:items-start mt-32 md:mt-52 dark:text-white text-black">
                <div>
                    <h1 className="text-3xl font-extrabold text-center mb-10 block md:hidden">SOBRE MIM</h1>
                    <div className="lg:w-96 w-72 h-80 backdrop-blur-xl dark:bg-telapro/40 bg-gray-100/10 border drop-shadow-2xl rounded-lg dark:border-gray-600 px-10 py-5">
                        <div className="flex gap-2 ">
                            <div className="w-3 h-3 rounded-full bg-pink-600"/>
                            <div className="w-3 h-3 rounded-full bg-amber-200"/>
                            <div className="w-3 h-3 rounded-full bg-emerald-400"/>
                        </div>
                        <div className="w-full h-0.5 bg-gray-300 dark:bg-gray-600 mt-3.5 mb-5"></div>
                        <div className="">
                            <p>&lt;<span className="text-dkwtblue dark:text-bluewtblr">image</span>&gt;</p>
                            <div className="ml-12 mt-4">
                                <Image
                                    loader={imageLoader}
                                    src={'/minhafoto.jpeg'}
                                    alt='minha foto'
                                    width={150}
                                    height={190}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative dark:text-white w-full text-center md:text-left md:max-w-3xl">
                    <h1 className='text-3xl font-bold hidden md:block'>SOBRE MIM</h1>
                    <h2 className='text-xl font-semibold mt-8'>Monte Alto, São Paulo</h2>
                    <p className='text-lg mt-4'>Olá, eu me chamo Igor Cortez e sou apaixonado por tecnologia desde os meus 13 anos de idade, quando tive meu primeiro contato com as linguagens de marcação "HTML" e "CSS". Depois de um tempo, comecei a estudar a linguagem de programação "PHP". Desde então, decidi trilhar o caminho da programação e aprender mais sobre este maravilhoso mundo.</p>
                    <div className="flex mt-10 w-full justify-center md:justify-start">
                        <Link href={'https://www.linkedin.com/in/igorctz/'}>
                            <button className='flex items-center gap-2 bg-dkwtblue rounded-lg px-4 py-1.5 text-white'>
                                <div>
                                    <Image
                                        loader={imageLoader}
                                        src={'logo-linkedin.svg'}
                                        alt='logo ver linkedin'
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                    Linkedin
                            </button>
                        </Link>
                        <Link href={'https://download1336.mediafire.com/2joebqk0xqogDN3UuLvoQHCkZQOmae94AnuYGOlGnC5DC1BL87W-DFYx7jtKQ4gv3jfMrYfbH1KnLmn1RrpvttksAMlJ/ok2hexeyk4elhzs/HABILIDADES.pdf'}>
                            <button className='flex items-center gap-2 rounded-lg border px-4 py-1.5 ml-8'>
                                <div className="brightness-75 dark:brightness-100">
                                    <Image
                                        loader={imageLoader}
                                        src={'cloud-download-outline.svg'}
                                        alt='logo baixar curriculo'
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                Curriculo
                            </button>
                        </Link>
                    </div>
                    <div className="absolute -z-20 top-44 right-16 blur-3xl">
                        <div className="w-56 h-56 rounded-full bg-bluedkblr/40 absolute"></div>
                        <div className="w-56 h-56 rounded-full bg-bluewtblr/40 absolute top-28 -right-10 "></div>
                        <div className="w-56 h-56 rounded-full bg-dkwtblue/40 absolute top-56 -right-52"></div>
                    </div>
                </div>
            </section>
            <section className="flex dark:text-white mt-36 w-full justify-end">
                <div>
                    <h1 className="text-3xl font-bold lg:text-left text-center">HABILIDADES</h1>
                    <div className="flex items-center gap-14 mt-10 lg:justify-end justify-center flex-wrap">
                        <div className='h-24 w-24 bg-gray-50/10 dark:brightness-100 brightness-75 dark:bg-telapro drop-shadow-2xl rounded-xl flex justify-center items-center'>
                            <Image
                                loader={imageLoader}
                                src={'logo-html5.svg'}
                                alt='logo html'
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className='h-24 w-24 bg-gray-50/10 dark:brightness-100 brightness-75 dark:bg-telapro drop-shadow-2xl rounded-xl flex justify-center items-center'>
                            <Image
                                loader={imageLoader}
                                src={'logo-css3.svg'}
                                alt='logo css'
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className='h-24 w-24 bg-gray-50/10 dark:brightness-100 brightness-75 dark:bg-telapro drop-shadow-2xl rounded-xl flex justify-center items-center'>
                            <Image
                                loader={imageLoader}
                                src={'logo-github.svg'}
                                alt='logo github'
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className='h-24 w-24 bg-gray-50/10 dark:brightness-100 brightness-75 dark:bg-telapro drop-shadow-2xl rounded-xl flex justify-center items-center'>
                            <Image
                                loader={imageLoader}
                                src={'logo-javascript.svg'}
                                alt='logo javascript'
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className='h-24 w-24 bg-gray-50/10 dark:brightness-100 brightness-75 dark:bg-telapro drop-shadow-2xl rounded-xl flex justify-center items-center'>
                            <Image
                                loader={imageLoader}
                                src={'node-js-brands.svg'}
                                alt='logo node'
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className='h-24 w-24 bg-gray-50/10 dark:brightness-100 brightness-75 dark:bg-telapro drop-shadow-2xl rounded-xl flex justify-center items-center'>
                            <Image
                                loader={imageLoader}
                                src={'php-brands.svg'}
                                alt='logo php'
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className='h-24 w-24 bg-gray-50/10 dark:brightness-100 brightness-75 dark:bg-telapro drop-shadow-2xl rounded-xl flex justify-center items-center'>
                            <Image
                                loader={imageLoader}
                                src={'react-brands.svg'}
                                alt='logo react'
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className='h-24 w-24 bg-gray-50/10 dark:brightness-100 brightness-75 dark:bg-telapro drop-shadow-2xl rounded-xl flex justify-center items-center'>
                            <Image
                                loader={imageLoader}
                                src={'add-outline.svg'}
                                alt='muito mais'
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="projetos" className="relative flex flex-col items-center justify-center dark:text-white mt-24 ">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold lg:text-left text-center">PROJETOS</h1>
                    <div className="flex mt-4 w-full gap-10">
                        <Link href={'https://dribbble.com/IgorCX2'}>
                            <button className='flex items-center gap-2 rounded-lg border px-4 py-1.5 dark:text-white'>
                                Dribbble
                            </button>
                        </Link>
                        <Link href={'https://github.com/IgorCX2'}>
                            <button className='flex items-center gap-2 rounded-lg border px-4 py-1.5 dark:text-white'>
                                GitHub
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-14 mt-10 justify-center flex-wrap ">
                    <Link href={''}>
                        <div className="bg-black h-36 w-72 relative rounded-xl overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src={'/eduke.png'}
                                alt='foto do site eduke'
                                fill
                            />
                        </div>
                    </Link>
                    <Link href={''}>
                        <div className="bg-black h-36 w-72 relative rounded-xl overflow-hidden text-white">
                            Em Desenvolvimento
                        </div>
                    </Link>
                    <Link href={''}>
                        <div className="bg-black h-36 w-72 relative rounded-xl overflow-hidden text-white">
                            Em Desenvolvimento
                        </div>
                    </Link>
                    <Link href={''}>
                        <div className="bg-black h-36 w-72 relative rounded-xl overflow-hidden text-white">
                            Em Desenvolvimento
                        </div>
                    </Link>
                    <Link href={''}>
                        <div className="bg-black h-36 w-72 relative rounded-xl overflow-hidden text-white">
                            Em Desenvolvimento
                        </div>
                    </Link>
                    <Link href={''}>
                        <div className="bg-black h-36 w-72 relative rounded-xl overflow-hidden text-white">
                            Em Desenvolvimento
                        </div>
                    </Link>
                    <Link href={''}>
                        <div className="bg-black h-36 w-72 relative rounded-xl overflow-hidden text-white">
                            Em Desenvolvimento
                        </div>
                    </Link>
                    <Link href={''}>
                        <div className="bg-black h-36 w-72 relative rounded-xl overflow-hidden text-white">
                            Em Desenvolvimento
                        </div>
                    </Link>
                </div>
                <div className="absolute -z-20 -top-0 left-10 blur-3xl rotate-12">
                    <div className="w-56 h-56 rounded-full bg-bluedkblr/40 absolute"></div>
                    <div className="w-56 h-56 rounded-full bg-bluewtblr/40 absolute top-28 -right-10"></div>
                    <div className="w-56 h-56 rounded-full bg-dkwtblue/40 absolute top-56 -right-52"></div>
                </div>
            </section>
            <section id="servicos" className="flex flex-col relative dark:text-white mt-28 w-full">
                <h1 className="text-3xl font-bold lg:text-left text-center">NOSSOS SERVIÇOS</h1>
                <div className="flex flex-wrap gap-10 lg:justify-between justify-center mt-10 relative">
                    <div className="h-64 w-64 flex flex-col justify-between	rounded-xl dark:bg-telapro drop-shadow-2xl bg-gray-100 px-10 py-5 relative">
                        <div>
                            <h1 className="mb-2 text-xl font-semibold">Vetorização</h1>
                            <p>Trasformamos o desenho feito a lápis e outras coisa, para o digital.</p>
                        </div>
                        <div className="flex justify-center">
                            <Link href={'mailto:igorcortez02@gmail.com'}>
                                <button className="bg-dkwtblue/10 py-1 px-2 rounded-full text-dkwtblue">Orçamento</button>
                            </Link>
                        </div>
                    </div>
                    <div className="h-64 w-64 flex flex-col justify-between	rounded-xl dark:bg-telapro drop-shadow-2xl bg-gray-100 px-10 py-5 relative">
                        <div>
                            <h1 className="mb-2 text-xl font-semibold">Crialçao de Site</h1>
                            <p>Fazemos o seu site totalmente personalizado com a sua marca.</p>
                        </div>
                        <div className="flex justify-center">
                            <Link href={'mailto:igorcortez02@gmail.com'}>
                                <button className="bg-dkwtblue/10 py-1 px-2 rounded-full text-dkwtblue">Orçamento</button>
                            </Link>
                        </div>
                    </div>
                    <div className="h-64 w-64 flex flex-col justify-between	rounded-xl dark:bg-telapro drop-shadow-2xl bg-gray-100 px-10 py-5 relative">
                        <div>
                            <h1 className="mb-2 text-xl font-semibold">Apresentações PowerPoint</h1>
                            <p>Nos envie o conteúdo e fazer a sua apresentação sensacional.</p>
                        </div>
                        <div className="flex justify-center">
                            <Link href={'mailto:igorcortez02@gmail.com'}>
                                <button className="bg-dkwtblue/10 py-1 px-2 rounded-full text-dkwtblue">Orçamento</button>
                            </Link>
                        </div>
                    </div>
                    <div className="h-64 w-64 flex flex-col justify-between	rounded-xl dark:bg-telapro drop-shadow-2xl bg-gray-100 px-10 py-5 relative">
                        <div>
                            <h1 className="mb-2 text-xl font-semibold">Algo Diferente</h1>
                            <p>Precisa de algo diferente? entre em contado com nossa equipe!</p>
                        </div>
                        <div className="flex justify-center">
                            <Link href={'mailto:igorcortez02@gmail.com'}>
                                <button className="bg-dkwtblue/10 py-1 px-2 rounded-full text-dkwtblue">Orçamento</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute -z-30 -top-44 right-16 blur-3xl">
                    <div className="w-56 h-56 rounded-full bg-bluedkblr/40 absolute"></div>
                    <div className="w-56 h-56 rounded-full bg-bluewtblr/40 absolute top-28 -right-10 "></div>
                    <div className="w-56 h-56 rounded-full bg-dkwtblue/40 absolute top-56 -right-52"></div>
                 </div>
            </section>
        </main>
    )
}