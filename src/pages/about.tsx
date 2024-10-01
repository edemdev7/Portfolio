import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { Links } from '../components/Links'
import { BiUserPin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { FaDiscord } from 'react-icons/fa'
import * as S from '../styles/about'
import { ButtonAlt, Section, Title } from '../styles/styles'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Edem KPOMACHI </title>
        <meta
          name="description"
          content="Page de description ."
        />
        <meta property="og:title" content="About | Edem KPOMACHI" />
        <meta
          property="og:description"
          content="Je m'appelle Edem KPOMACHI, je suis un développeur full-stack originaire du Bénin."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <S.AboutContainer>
          <Title>
            <p>../about.jsx</p>
            Àpropos
            <span>
              <BiUserPin /> About
            </span>
          </Title>

          <S.AboutContent>
            <S.AboutImage>
              <img
                className="AboutImg"
                src="/profile-img.jpeg"
                alt="Edem profile"
              />

              <div className="links">
                <ul>
                  <Link href={'https://github.com/edemdev7'}>
                    <a target="_blank" aria-label="Link para o Github">
                      <AiFillGithub size={25} /> @edemdev7
                    </a>
                  </Link>
                  <Link href={'https://www.linkedin.com/in/edem-kpomachi-7b2189264/'}>
                    <a target="_blank" aria-label="Link para o Linkedin">
                      <BsLinkedin size={25} /> @edem-kpomachi
                    </a>
                  </Link>
                  <Link
                    href={'https://api.whatsapp.com/send?phone=22968548443'}
                  >
                    <a target="_blank" aria-label="Link  WhatsApp">
                      <RiWhatsappFill size={25} /> +229 68548443
                    </a>
                  </Link>
                  <Link
                    href={'https://www.discordapp.com/users/edemdev'}
                  >
                    <a
                      className="dc"
                      target="_blank"
                      aria-label="Link para o Discord"
                    >
                      <FaDiscord size={25} /> @edemdev
                    </a>
                  </Link>
                  <Link href={'mailto:edem.kpomachi@epitech.eu'}>
                    <a
                      className="email"
                      target="_blank"
                      aria-label="Link para o email"
                    >
                      <GrMail size={25} /> @edem.kpomachi@epitech.eu
                    </a>
                  </Link>
                </ul>
              </div>

              <S.AboutContact>
                <h3>
                Parlons-en, peut-être pourrons-nous créer ensemble un projet incroyable ?
                </h3>
                <p>Envoyez-moi un message ! 😉</p>
                <Link href={'/contact'}>
                  <a>
                    <ButtonAlt>Contact</ButtonAlt>
                  </a>
                </Link>
              </S.AboutContact>
            </S.AboutImage>
            <S.AboutDescription>
              <p>
               Edem KPOMACHI, je suis un développeur full-stack
                du Bénin, passionné par le design et le codage. Ma spécialité
                est de créer des interfaces et des fonctionnalités pour des applications web en utilisant ....
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas molestiae dignissimos, consequatur ducimus ipsum dolor dolorem molestias! Numquam, eligendi quasi aut corrupti aliquid ab modi rem itaque minima error ipsa?
              </p>
              <p>
                Foi somente em 2021, no penúltimo semestre da faculdade, que
                comecei a levar a programação mais a sério. Iniciei minha
                primeira tentativa de aprender HTML e CSS, porém acabei dando
                uma pausa após alguns meses devido à falta de tempo livre.
              </p>
              <p>
                No ano seguinte, em 2022, percebi que precisava definir um
                objetivo claro. Foi então que direcionei meus esforços para
                aprimorar minhas habilidades em HTML, CSS e JavaScript, com o
                objetivo de construir aplicações web e aprofundar meu
                aprendizado. Esse foi o ponto de partida para me tornar um
                desenvolvedor web.
              </p>
              <p>
                Em termos de minha experiência até o momento, tenho uma base
                sólida em desenvolvimento front-end. Gosto de trabalhar com
                React e NextJS para criar interfaces de usuário dinâmicas.
                Trabalhei como desenvolvedor front-end freelancer,
                utilizando ReactJS e Material UI, além de colaborar com a equipe de desenvolvimento Back-end para integrar componentes Front-end e Back-end de nossas aplicações.
              </p>
              <p>
                Continuo estudando e desenvolvendo projetos
                pessoais para expandir meus conhecimentos, focado no ecossistema
                Javascript para desenvolvimento Front-end utilizando ReactJS,
                Typescript, Next.js, entre outros.
              </p>
              <p>
                Estou sempre em busca de desafios e oportunidades para crescer
                profissionalmente, e estou animado para contribuir com projetos
                interessantes e inovadores no campo do desenvolvimento web.
              </p>
            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>
      </Section>
      <Footer />
    </>
  )
}
