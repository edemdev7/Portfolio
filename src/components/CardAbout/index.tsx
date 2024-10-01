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
            <h2>Permettez-moi de me présenter</h2>
            <p>
            Je suis un développeur full-stack  passionné par la conception et le codage.
               Ma spécialité est la création des interfaces et de
              fonctionnalités pour les applications web en utilisant .
              <br />
              Vous pouvez en savoir plus sur mon profil et mon travail
              en naviguant sur le site.
            </p>

            <strong>
              P.S. Ce site est en libre accès et est disponible à cette adresse{' '}
              <Link href={'https://github.com/edemdev7'}>
                <a target='_blank'>Github</a>
              </Link>
            </strong>
          </div>

          <div className='aboutButton'>
            <Link href={'/contact'}>
              <a>
                <Button>
                Prendre contact
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
                  En savoir plus
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
