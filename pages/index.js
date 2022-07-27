import Image from 'next/image'
import img_linkedin from '../public/logo-linkedin.svg'
import img_github from '../public/logo-github.svg'
import img_download from '../public/cloud-download-outline.svg'
import img_eu from '../public/eu.jpeg'
import img_html5 from '../public/logo-html5.svg'
import img_css3 from '../public/logo-css3.svg'
import img_jv from '../public/logo-javascript.svg'
import img_php from '../public/php-brands.svg'
import img_node from '../public/node-js-brands.svg'
import img_react from '../public/react-brands.svg'
import img_more from '../public/add-outline.svg'
import img_prod from '../public/testss.jpg'
import Link from 'next/link'
function Home(){
    return(
        <>
            <div className="relative  ">
                <div className="absolute -top-12 right-10 blur-3xl">
                    <div className="w-56 h-56 rounded-full bg-bluedkblr absolute"></div>
                    <div className="w-56 h-56 rounded-full bg-bluewtblr absolute top-28 -right-10"></div>
                    <div className="w-56 h-56 rounded-full bg-dkwtblue absolute top-56 -right-52"></div>
                </div>
            </div>
            <div className="relative ">
                <div className="absolute top-72 blur-3xl">
                    <div className="w-56 h-56 rounded-full bg-bluedkblr/50 absolute"></div>
                    <div className="w-56 h-56 rounded-full bg-bluewtblr/50 absolute top-28 -right-10"></div>
                    <div className="w-56 h-56 rounded-full bg-dkwtblue/50 absolute top-56 -right-52"></div>
                </div>
            </div>

            <main className="w-full relative z-10 top-28">
                <section className="w-full flex justify-between items-start">
                    <div className="max-w-2xl w-full text-white ">
                        <h1 className="text-6xl font-extrabold leading-tight">Olá, eu sou o<span className="text-dkwtblue"> &#123;Igor&#125;</span>. Um desenvolvedor Front-end | Back-end</h1>
                        <div className="flex mt-8">
                            <button className='flex items-center gap-2 bg-dkwtblue rounded-lg px-4 py-1.5'>
                                <Image
                                    src={img_linkedin}
                                    alt='logo'
                                    width={25}
                                    height={25}
                                />
                                 Linkedin
                            </button>
                            <button className='flex items-center gap-2 rounded-lg border px-4 py-1.5 ml-8'>
                                <Image
                                    src={img_github}
                                    alt='logo'
                                    width={25}
                                    height={25}
                                />
                                 Github
                            </button>
                        </div>
                    </div>
                    <div className="max-w-2xl w-full h-96 bg-telapro/40 backdrop-blur-xl border rounded-lg border-gray-600 px-10 py-5">
                        <div>
                            <div>
                                <div className="flex gap-5 ">
                                    <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                                    <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                                    <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                                </div>
                                <div className="w-full h-0.5 bg-gray-600 mt-3.5 mb-5"></div>
                            </div>
                            <div className="text-white">
                                <p>&lt;<span className="text-pink-600">body</span>&gt;</p>
                                <p className="ml-6">&lt;<span className="text-pink-600">h1</span>&gt;<span>Habilidades</span>&lt;&#47;<span className="text-pink-600">h1</span>&gt;</p>
                                <p className="ml-6">&lt;<span className="text-pink-600">ol</span>&gt;</p>
                                <div className="ml-12">
                                    <p>&lt;<span className="text-pink-600">li</span><span className="text-emerald-400"> class</span><span className="text-pink-600">=</span><span className="text-amber-200">"intermediario"</span>&gt;<span>html5</span>&lt;&#47;<span className="text-pink-600">li</span>&gt;</p>
                                    <p>&lt;<span className="text-pink-600">li</span><span className="text-emerald-400"> class</span><span className="text-pink-600">=</span><span className="text-amber-200">"intermediario"</span>&gt;<span>css3</span>&lt;&#47;<span className="text-pink-600">li</span>&gt;</p>
                                    <p>&lt;<span className="text-pink-600">li</span><span className="text-emerald-400"> class</span><span className="text-pink-600">=</span><span className="text-amber-200">"intermediario"</span>&gt;<span>javascript</span>&lt;&#47;<span className="text-pink-600">li</span>&gt;</p>
                                    <p>&lt;<span className="text-pink-600">li</span><span className="text-emerald-400"> class</span><span className="text-pink-600">=</span><span className="text-amber-200">"intermediario"</span>&gt;<span>php</span>&lt;&#47;<span className="text-pink-600">li</span>&gt;</p>
                                    <p>&lt;<span className="text-pink-600">li</span><span className="text-emerald-400"> class</span><span className="text-pink-600">=</span><span className="text-amber-200">"intermediario"</span>&gt;<span>mysql</span>&lt;&#47;<span className="text-pink-600">li</span>&gt;</p>
                                    <p>&lt;<span className="text-pink-600">li</span><span className="text-emerald-400"> class</span><span className="text-pink-600">=</span><span className="text-amber-200">"intermediario"</span>&gt;<span>next</span>&lt;&#47;<span className="text-pink-600">li</span>&gt;</p>
                                    <p>&lt;<span className="text-pink-600">li</span><span className="text-emerald-400"> class</span><span className="text-pink-600">=</span><span className="text-amber-200">"intermediario"</span>&gt;<span>node</span>&lt;&#47;<span className="text-pink-600">li</span>&gt;</p>
                                    <p>&lt;<span className="text-pink-600">li</span><span className="text-emerald-400"> class</span><span className="text-pink-600">=</span><span className="text-amber-200">"intermediario"</span>&gt;<span>react</span>&lt;&#47;<span className="text-pink-600">li</span>&gt;</p>
                                </div>
                                <p className="ml-6">&lt;&#47;<span className="text-pink-600">ol</span>&gt;</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-96 h-56 bg-telapro border rounded-lg border-gray-600 px-10 py-5 -right-20 top-64 text-white">
                        <p>Try &#123;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;// Ola, seja bem vindo ao meu site, eu me chamo<span className="text-dkwtblue"> Igor Cortez</span> e sou apaixonado por tecnologia desde os meus 13 anos de idade, desde entao, decidi trilhar o caminho da programação e aprender mais sobre este maravilhoso mundo</p>
                    </div>
                </section>
                <section className="w-full flex justify-start gap-20 items-start mt-52">
                    <div className="w-96 h-80 bg-telapro/40 backdrop-blur-xl border rounded-lg border-gray-600 px-10 py-5">
                        <div>
                            <div>
                                <div className="flex gap-2 ">
                                    <div className="w-3 h-3 rounded-full bg-pink-600"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-200"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                                </div>
                                <div className="w-full h-0.5 bg-gray-600 mt-3.5 mb-5"></div>
                            </div>
                            <div className="text-white">
                                <p>&lt;<span className="text-bluewtblr">image</span>&gt;</p>
                                <div className="ml-12 mt-4">
                                    <Image
                                        src={img_eu}
                                        alt='logo'
                                        width={150}
                                        height={190}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-white max-w-3xl w-full">
                        <h1 className='text-3xl font-bold mt-1'>SOBRE MIM</h1>
                        <h2 className='text-xl font-semibold mt-8'>Monte Alto, São Paulo</h2>
                        <p className='text-lg mt-4'>Ola, eu me chamo Igor Cortez e sou apaixonado por tecnologia desde os meus 13 anos de idade, quando tive meu primeiro contado com as linguagens de marcação "Html" e "Css", depois de um tempo comecei a estudar a linguagem de programação "PhP". Desde entao, decidi trilhar o caminho da programação e aprender mais sobre este maravilhoso mundo</p>
                        <div className="flex mt-8">
                            <button className='flex items-center gap-2 bg-dkwtblue rounded-lg px-4 py-1.5'>
                                <Image
                                    src={img_linkedin}
                                    alt='logo'
                                    width={25}
                                    height={25}
                                />
                                 Linkedin
                            </button>
                            <button className='flex items-center gap-2 rounded-lg border px-4 py-1.5 ml-8'>
                                <Image
                                    src={img_download}
                                    alt='logo'
                                    width={25}
                                    height={25}
                                />
                                 Currículo
                            </button>
                        </div>
                    </div>
                </section>
                <div className="relative -z-10">
                    <div className="absolute -top-36 right-96 blur-3xl ">
                        <div className="w-56 h-56 rounded-full bg-bluedkblr/40 absolute"></div>
                        <div className="w-56 h-56 rounded-full bg-bluewtblr/40 absolute top-28 -right-10 "></div>
                        <div className="w-56 h-56 rounded-full bg-dkwtblue/40 absolute top-56 -right-52"></div>
                    </div>
                </div>
                <section className="w-full flex justify-end mt-36">
                    <div>
                        <div>
                            <h1 className='text-3xl font-bold  text-white mb-10'>HABILIDADES</h1>
                        </div>
                        <div className='flex items-center gap-14'>
                            <div className='h-24 w-24 bg-telapro drop-shadow-2xl rounded-xl flex justify-center items-center'>
                                <Image
                                    src={img_html5}
                                    alt='logo'
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className='h-24 w-24 bg-telapro drop-shadow-2xl rounded-xl flex justify-center items-center'>
                                <Image
                                    src={img_css3}
                                    alt='logo'
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className='h-24 w-24 bg-telapro drop-shadow-2xl rounded-xl flex justify-center items-center'>
                                <Image
                                    src={img_jv}
                                    alt='logo'
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className='h-24 w-24 bg-telapro drop-shadow-2xl rounded-xl flex justify-center items-center'>
                                <Image
                                    src={img_php}
                                    alt='logo'
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className='h-24 w-24 bg-telapro drop-shadow-2xl rounded-xl flex justify-center items-center'>
                                <Image
                                    src={img_node}
                                    alt='logo'
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className='h-24 w-24 bg-telapro drop-shadow-2xl rounded-xl flex justify-center items-center'>
                                <Image
                                    src={img_react}
                                    alt='logo'
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className='h-24 w-24 bg-telapro drop-shadow-2xl rounded-xl flex justify-center items-center'>
                                <Image
                                    src={img_github}
                                    alt='logo'
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className='h-24 w-24 bg-telapro drop-shadow-2xl rounded-xl flex justify-center items-center'>
                                <Image
                                    src={img_more}
                                    alt='logo'
                                    width={50}
                                    height={50}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative w-full flex justify-center mt-36">
                    <div>
                        <div>
                            <h1 className='text-3xl font-bold text-white mb-16 text-center'>PROJETOS</h1>
                        </div>
                        <div className='flex gap-20 items-center text-white'>
                            <Link href="/">
                                <div className='w-64 h-96 bg-telapro drop-shadow-2xl rounded-xl'>
                                    <div className="w-64 h-3/6 relative">
                                        <Image 
                                            className="rounded-t-3xl"
                                            src={img_prod}
                                            alt='logo'
                                            priority={true}
                                            layout='fill'
                                        />
                                    </div>
                                    <div className="px-5 py-4">
                                        <p className='font-bold' >Animais Fantásticos</p>
                                        <p className="text-sm mt-2">Projeto desenvolvido a partir do curso de JavaScript ES6+ completo da Origamid</p>
                                        <div className="absolute bottom-4">
                                            <p className="text-sm text-dkwtblue">Tecnologias usadas no projeto: HTML, CSS, JavaScript Vanilla.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/">
                                <div className='w-64 h-96 bg-telapro drop-shadow-2xl rounded-xl'>
                                    <div className="w-64 h-3/6 relative">
                                        <Image 
                                            className="rounded-t-3xl"
                                            src={img_prod}
                                            alt='logo'
                                            priority={true}
                                            layout='fill'
                                        />
                                    </div>
                                    <div className="px-5 py-4">
                                        <p className='font-bold' >Animais Fantásticos</p>
                                        <p className="text-sm mt-2">Projeto desenvolvido a partir do curso de JavaScript ES6+ completo da Origamid</p>
                                        <div className="absolute bottom-4">
                                            <p className="text-sm text-dkwtblue">Tecnologias usadas no projeto: HTML, CSS, JavaScript Vanilla.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/">
                                <div className='w-64 h-96 bg-telapro drop-shadow-2xl rounded-xl'>
                                    <div className="w-64 h-3/6 relative">
                                        <Image 
                                            className="rounded-t-3xl"
                                            src={img_prod}
                                            alt='logo'
                                            priority={true}
                                            layout='fill'
                                        />
                                    </div>
                                    <div className="px-5 py-4">
                                        <p className='font-bold' >Animais Fantásticos</p>
                                        <p className="text-sm mt-2">Projeto desenvolvido a partir do curso de JavaScript ES6+ completo da Origamid</p>
                                        <div className="absolute bottom-4">
                                            <p className="text-sm text-dkwtblue">Tecnologias usadas no projeto: HTML, CSS, JavaScript Vanilla.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/">
                                <div className='w-64 h-96 bg-telapro drop-shadow-2xl rounded-xl'>
                                    <div className="w-64 h-3/6 relative">
                                        <Image 
                                            className="rounded-t-3xl"
                                            src={img_prod}
                                            alt='logo'
                                            priority={true}
                                            layout='fill'
                                        />
                                    </div>
                                    <div className="px-5 py-4">
                                        <p className='font-bold' >Animais Fantásticos</p>
                                        <p className="text-sm mt-2">Projeto desenvolvido a partir do curso de JavaScript ES6+ completo da Origamid</p>
                                        <div className="absolute bottom-4">
                                            <p className="text-sm text-dkwtblue">Tecnologias usadas no projeto: HTML, CSS, JavaScript Vanilla.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Home;