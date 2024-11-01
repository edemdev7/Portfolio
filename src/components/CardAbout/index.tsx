import Image from 'next/image'
import Link from 'next/link'
import { Button, Container, ButtonAlternatives } from '../../styles/styles'
import { AboutContainer } from './styles'
import { ArrowRight, TelegramLogo } from 'phosphor-react'

export function About() {
  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={500}
            height={500}
            className="AboutImg"
            src="/about.svg"
            alt="Imagem de perfil"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
          <h2>Allow me to introduce myself</h2>
          <p>
              I am Edem KPOMACHI, a full-stack developer with a deep passion for backend development and a strong foundation in AI. With a Bachelor's degree in 
              Software Architecture and ongoing certification as a Fullstack Web and Mobile Developer, I specialize in crafting efficient and scalable solutions 
              for web and mobile applications.
              <br />
              My expertise includes technologies such as Laravel, Django, Flask, Next.js, and React Native, enabling me to create intuitive and high-performance user 
              interfaces and backends. 
              <br />
              Feel free to explore the site to learn more about my work, my projects, and my journey in software development.
          </p>


            <strong>
            P.S. This site is freely available at this address{' '}
              <Link href={'https://github.com/edemdev7'}>
                <a target='_blank'>Github</a>
              </Link>
            </strong>
          </div>

          <div className='aboutButton'>
            <Link href={'/contact'}>
              <a>
                <Button>
               Contact me
                  <TelegramLogo
                    style={{
                      marginBottom: '-0.1rem',
                      marginLeft: '0.2rem',
                    }}
                    size={16}
                    weight="bold"
                  />
                </Button>
              </a>
            </Link>
            <Link href={'/about'}>
              <a>
                <ButtonAlternatives>
                  Know more...
                  <ArrowRight
                    style={{
                      marginBottom: '-0.1rem',
                      marginLeft: '0.2rem'
                    }}
                    weight="bold"
                    size={16}
                  />
                </ButtonAlternatives>
              </a>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  )
}
