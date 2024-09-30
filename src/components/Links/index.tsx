import Link from 'next/link'
import { Icons } from './styles'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export function Links() {
  return (
    <>
      <Icons>
        <Link href={'https://github.com/edemdev7'}>
          <a target="_blank" aria-label="Link  Github">
            <FiGithub />
          </a>
        </Link>
        <Link href={'https://www.linkedin.com/in/edem-kpomachi-7b2189264/'}>
          <a target="_blank" aria-label="Linkedin Link">
            <FiLinkedin />
          </a>
        </Link>
        <Link href={'https://api.whatsapp.com/send?phone=22968548443'}>
          <a target="_blank" aria-label="whatsapp link">
            <FaWhatsapp />
          </a>
        </Link>
        <div className="barra"></div>
      </Icons>
    </>
  )
}
