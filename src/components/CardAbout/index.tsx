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
            I am a full-stack developer with a passion for design and coding.
               My specialty is the creation of interfaces and
              for web applications using .
              <br />
              You can find out more about my profile and my work
              by browsing the site.
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
