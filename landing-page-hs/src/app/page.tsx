import { ModeToggle } from './_components/mode-toggle';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { LuLayoutDashboard, LuLayout } from 'react-icons/lu'

export default function Home() {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-4 p-auto'>
      <header id="intro" className='py-auto md:py-auto lg:pt-2 w-[30rem] mx-auto flex flex-col items-center gap-5'>
        <div className='border-2 rounded-full border-primary'>
          <img className='w-[200px] rounded-[50%] m-1' src="https://avatars.githubusercontent.com/u/107481318?v=4" alt="Imagem Diego" />
        </div>
        <h1 className='rounded-2xl bg-muted px-4 py-1.5 text-sm font medium flex items-center gap-1 shadow'>Oi, sou<span className='text-primary flex items-center justify-center'>Hudson Diego<ModeToggle /></span></h1>
        <p className='text-center'>Dev FrontEnd e UI/UX Design. <br />
          Acesse um desses links e <br /> aproveite a experiência!</p>
      </header>

      <main id="links" className='flex flex-col gap-3 text-center w-[20rem] mx-auto md:w-[30rem]'>
        <section className='flex flex-col gap-3'>
          <a className='rounded-2xl bg-muted py-2 text-sm font medium flex justify-center items-center gap-2 shadow active:scale-110'><FaGithub size={20} />Github</a>
          <a className='rounded-2xl bg-muted py-2 text-sm font medium flex justify-center items-center gap-2 shadow active:scale-110'><FaLinkedin size={20} /> LinkedIn</a>
          <a className='rounded-2xl bg-muted py-2 text-sm font medium flex justify-center items-center gap-2 shadow active:scale-110'><FaCode size={20} />Projetos Dev</a>
          <a className='rounded-2xl bg-muted py-2 text-sm font medium flex justify-center items-center gap-2 shadow active:scale-110'><LuLayoutDashboard size={20} /> Proejtos UI/UX</a>
          <a className='rounded-2xl bg-muted py-2 text-sm font medium flex justify-center items-center gap-2 shadow active:scale-110'><LuLayout size={20} /> Site Profissional</a>
        </section>
      </main>

      <footer id="create" className='space-y-2 md:py-2'><p className='text-xs'>Criado por <span className='text-primary'>Hudson Sena</span>, com NextJs 14 e TailwindCss</p></footer>
    </div>
  )
}
