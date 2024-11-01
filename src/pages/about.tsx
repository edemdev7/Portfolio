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
                Let talk about it, maybe we can create an incredible project together?
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
                My name is Edem KPOMACHI, and I am a full-stack developer from Benin. I have a deep passion for coding, which drives me to create seamless and engaging user interfaces and robust functionalities for web applications. My expertise spans technologies like React, Django, and Flask, allowing me to build dynamic web solutions that meet user needs.
            </p>
            <p>
                Throughout my journey in software development, I have had the privilege of working on diverse projects that challenged me to grow and adapt. My internship at VALLISTECH was particularly transformative, where I gained hands-on experience with tools like WordPress and honed my skills in data analysis using Natural Language Processing (NLP) and web scraping techniques.
            </p>
            <p>
                I thrive in collaborative environments, and I believe that teamwork is essential to success in software development. My experiences have taught me the importance of clear communication and agile methodologies, enabling me to contribute effectively to team projects and deliver high-quality results.
            </p>
            <p>
                As a lifelong learner, I am constantly exploring new technologies and best practices in the industry. My goal is to leverage my skills to create innovative solutions that not only address current challenges but also anticipate future needs. I am excited about the potential of technology to drive change and make a positive impact.
            </p>
            <p>
                I look forward to connecting with like-minded professionals and contributing to projects that push the boundaries of what is possible in web development. Together, we can create applications that not only function well but also provide exceptional user experiences.
            </p>
            <p>
                Thank you for taking the time to learn more about me. I invite you to explore my work and reach out if you are interested in collaboration or discussing new ideas!
            </p>

            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>
      </Section>
      <Footer />
    </>
  )
}
