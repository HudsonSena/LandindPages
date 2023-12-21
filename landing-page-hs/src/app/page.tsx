import { ModeToggle } from './_components/mode-toggle';

export default function Home() {
  return (
    <main className='p-10'>
      <section id="intro">        
        <div className='container flex max-w-[64rem] flex-col items-center text-center gap-4'>
          <img className='w-[200px] rounded-[50%]' src="https://avatars.githubusercontent.com/u/107481318?v=4" alt="" />
          <h1 className='flex m-2 text-primary items-center'>Oi, sou Hudson Diego.<ModeToggle /></h1>
          <p>Acesse um desses links e aproveite a experiência...</p>          
        </div>
      </section>
      <section id="links">
        <h1><a href="">Site Pessoal</a></h1>
        <h1><a href="">LinkedIn</a></h1>
        <h1><a href="">GitHub</a></h1>
        <h1><a href="">Portifólio Dev</a></h1>
        <h1><a href="">UI/UX Design</a></h1>
      </section>
      <section id="create"><p>Landing Page criada por <span>Hudson Sena</span>, com NextJs e TailwindCss</p></section>
    </main>
  )
}
