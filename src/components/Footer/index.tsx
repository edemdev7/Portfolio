import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <h4> &copy; {new Date().getFullYear()} Edem KPOMACHI</h4>
      <div className="links">
        <Link href={'https://github.com/edemdev7'}>
          <a target="_blank" aria-label=" Github">
            <FiGithub />
          </a>
        </Link>
        <Link href={'https://www.linkedin.com/in/edem-kpomachi-7b2189264/'}>
          <a target="_blank" aria-label=" Linkedin">
            <FiLinkedin />
          </a>
        </Link>
        <Link href={'https://api.whatsapp.com/send?phone=22968548443'}>
          <a target="_blank" aria-label=" whatsapp">
            <FaWhatsapp />
          </a>
        </Link>
      </div>
    </FooterContainer>
  )
}
