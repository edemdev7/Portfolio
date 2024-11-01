import Head from 'next/head'
import { Header } from '../components/Header'
import { Links } from '../components/Links'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { CV } from '../components/CV'
import { Description, Section, Title } from '../styles/styles'
import { PageSection } from '../styles/resume'
import { BsFileText } from 'react-icons/bs'

export default function Resume() {
  const resumeData =
    'https://www.canva.com/design/DAGSotfn20c/CCPwKOVIcVtiT_V0-I3tAw/view?utm_content=DAGSotfn20c&utm_campaign=designshare&utm_medium=link&utm_source=share'
    

  const previewData = `${resumeData.substr(
    0,
    resumeData.lastIndexOf('/') + 1
  )}view?embed`

  return (
    <>
      <Head>
        <title>Resume | Edem KPOMACHI </title>
        <meta
          name="description"
          content="Aqui você poderá ver ou baixar o meu currículo."
        />
        <meta property="og:title" content="Resume | Edem KPOMACHI" />
        <meta
          property="og:description"
          content="Aqui você poderá ver ou baixar o meu currículo."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <Title>
          <p>../curriculum.jsx</p>
          CV
          <span>
            <BsFileText /> Curriculum
          </span>
        </Title>
        <Description>
        You can view or download my CV here.
        </Description>

        <PageSection>
          <iframe
            src={previewData}
            allowFullScreen
            width="740"
            height="780"
            title="Edem KPOMACHI"
          />

          <CV />
        </PageSection>
      </Section>
      <Footer />
    </>
  )
}
