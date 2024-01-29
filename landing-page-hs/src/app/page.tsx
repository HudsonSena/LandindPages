import { ModeToggle } from './_components/mode-toggle';
import { Github, Linkedin, MessageCircle, Code, LayoutTemplate } from  "lucide-react";

export default function Home() {
  return (
    <div className='p-4 flex flex-col text-center'>
      <header id="intro" className='space-y-6 py-8 md:py-12 lg:pt-32'>        
        <div className='container flex max-w-[64rem] flex-col items-center gap-4'>
          <img className='w-[200px] rounded-[50%]' src="https://avatars.githubusercontent.com/u/107481318?v=4" alt="Imagem Diego" />
          <span className='rounded-2xl bg-muted px-4 py-1.5 text-sm font medium flex text-primary items-center'>Oi, sou Hudson Diego<ModeToggle /></span>
          <p>Desenvolvedor FrontEnd e UI/UX Design.<br /> 
          Acesse um desses links e aproveite a experiência!</p>          
        </div>
      </header>
      <main id="links" className='flex flex-col gap-5 text-center w-[20rem] m-auto'>
        <h1 className='flex flex-col'>
          <a className='cursor-pointer'>Github<Github /></a>
          <a>LinkedIn<Linkedin /></a>
          <a>Whatsapp<MessageCircle /></a>
          <a>Portifólio Dev<Code /></a>
          <a>Portifólio UI/UX<LayoutTemplate /></a>
        </h1>
        <h1>
          <button>Professional Website</button>
        </h1>
      </main>
      <footer id="create" className='space-y-6 py-8 md:py-12 lg:pb-32 '><p className='text-xs'>Criado por <span className='text-primary'>Hudson Sena</span>, com NextJs 14 e TailwindCss</p></footer>
    </div>
  )
}
