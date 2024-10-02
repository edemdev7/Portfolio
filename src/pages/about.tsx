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
                Let's talk about it, maybe we can create an incredible project together?
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
              Edem KPOMACHI, I'm a full-stack developer from Benin.
                from Benin, with a passion for design and coding. My specialty
                is to create interfaces and functionalities for web applications using ....
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas molestiae dignissimos, consequatur ducimus ipsum dolor dolorem molestias! Numquam, eligendi quasi aut corrupti aliquid ab modi rem itaque minima error ipsa?
              </p>
              <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eius consequuntur sequi, rerum vero corrupti voluptate nemo magnam doloribus, nihil repellendus nobis quam suscipit ea labore veniam obcaecati necessitatibus ipsum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ab excepturi cumque quasi. Libero commodi accusantium dignissimos dolorum optio, ipsam possimus atque pariatur culpa magni, blanditiis nisi enim at. Vitae?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt omnis eum id magni exercitationem consequuntur alias minus ea aliquid. Debitis laudantium quibusdam magni, cum exercitationem itaque? Reprehenderit dicta asperiores delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia itaque nesciunt facilis delectus ratione. Repudiandae aspernatur sunt, autem impedit eveniet cum distinctio necessitatibus, dignissimos, vero ipsum rem? Minima, aperiam ab.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ratione praesentium maiores vel accusamus porro aspernatur odit ducimus cupiditate, magnam non voluptate, nostrum recusandae numquam iure hic mollitia optio veniam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque rem facere ullam magni nulla ducimus perferendis id qui non, debitis eligendi error, explicabo corporis, exercitationem ut eveniet? Fugiat, sapiente accusamus!
              </p>
            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>
      </Section>
      <Footer />
    </>
  )
}
