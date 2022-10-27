import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <h4> &copy; 2022 Evander Inácio</h4>
      <div className="links">
        <Link href={'https://github.com/EvanderInacio'}>
          <a target="_blank">
            <FiGithub />
          </a>
        </Link>
        <Link href={'https://www.linkedin.com/in/evander-inacio/'}>
          <a target="_blank">
            <FiLinkedin />
          </a>
        </Link>
        <Link href={'https://api.whatsapp.com/send?phone=5511995085916'}>
          <a target="_blank">
            <FaWhatsapp />
          </a>
        </Link>
      </div>
    </FooterContainer>
  )
}