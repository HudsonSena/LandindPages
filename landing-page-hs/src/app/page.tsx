import { ModeToggle } from './_components/mode-toggle';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { LuLayoutDashboard, LuLayout } from 'react-icons/lu'

export default function Home() {
  return (
    <div className='p-4 flex flex-col text-center'>
      <header id="intro" className='space-y-6 py-8 md:py-12 lg:pt-32 w-[30rem] m-auto'>        
        <div className='container flex max-w-[64rem] flex-col items-center gap-4'>
          <img className='w-[200px] rounded-[50%]' src="https://avatars.githubusercontent.com/u/107481318?v=4" alt="Imagem Diego" />
          <h1 className='rounded-2xl bg-muted px-4 py-1.5 text-sm font medium flex items-center gap-1'>Oi, sou<span className='text-primary flex items-center justify-center'>Hudson Diego<ModeToggle /></span></h1>
          <p>Desenvolvedor FrontEnd e UI/UX Design. 
          Acesse um desses links e aproveite a experiência!</p>          
        </div>
      </header>
      <main id="links" className='flex flex-col gap-5 text-center w-[20rem] m-auto md:w-[30rem] m-auto'>
        <section className='flex flex-col gap-4'>
          <a className='rounded-2xl bg-muted py-2 text-sm font medium flex justify-center items-center gap-2'><FaGithub size={20}/>Github</a>
          <a className='rounded-2xl bg-muted py-2 text-sm font medium flex justify-center items-center gap-2'><FaLinkedin size={20}/> LinkedIn</a>
          <a className='rounded-2xl bg-muted py-2 text-sm font medium flex justify-center items-center gap-2'><FaCode size={20}/> Portifólio Dev</a>
          <a className='rounded-2xl bg-muted py-2 text-sm font medium flex justify-center items-center gap-2'><LuLayoutDashboard size={20} /> Portifólio UI/UX</a>
          <a className='rounded-2xl bg-muted py-2 text-sm font medium flex justify-center items-center gap-2'><LuLayout size={20}/> Professional WebSite</a>
        </section>
      </main>
      <footer id="create" className='space-y-6 py-8 md:py-12 lg:pb-32 '><p className='text-xs'>Criado por <span className='text-primary'>Hudson Sena</span>, com NextJs 14 e TailwindCss</p></footer>
    </div>
  )
}
