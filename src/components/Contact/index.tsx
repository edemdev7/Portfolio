/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from 'next/link'
import { Form } from './Form'
import { Description, Section, Title } from '../../styles/styles'
import { ContainerContact, ContactContent } from './styles'
import { BsWhatsapp } from 'react-icons/bs'
import { Envelope, TelegramLogo } from 'phosphor-react'

export function Contact() {
  return (
    <Section>
      <Title>
        <p>../contact.tsx</p>
        Contact
        <span>
          <Envelope /> Contact
        </span>
      </Title>
      <Description>
      I'm always open to new work opportunities or collaborating on
        some amazing new projects. Just fill in the form and
        I'll get back to you 💪
      </Description>

      <ContainerContact>
        <ContactContent>
          <div className="contact-content">
            <h4>
              <BsWhatsapp size={22} color="#00fffb" /> WhatsApp{' '}
            </h4>
            <Link href="https://api.whatsapp.com/send?phone=22968548443">
              <a target="_blank">
                <span>+229 68548443</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {' '}
              <TelegramLogo size={22} color="#00fffb" /> Email{' '}
            </h4>
            <Link href="mailto:edem.kpomachi@epitech.eu">
              <a target="_blank">
                <span>edem.kpomachi@epitech.eu</span>
              </a>
            </Link>
          </div>
        </ContactContent>

        <Form />
      </ContainerContact>
    </Section>
  )
}
