/* eslint-disable @next/next/no-img-element */
import { ButtonSecondAlt, Container, Title } from "../../styles/styles";
import { CVContainer, CVContent, CVDescription, Curriculum } from "./styles"
import { FiDownload } from 'react-icons/fi'

export function CV() {
  return (
    <Container>
      <CVContainer>
        <Title style={{ marginBottom: '3rem' }}>
          <span>
            <FiDownload /> Download
          </span>
        </Title>

        <CVContent>
          <CVDescription>
              <div className="aspas">&ldquo;</div>
              <p>
              You can download my CV by clicking on the download button.              </p>
              <div className="profile">
                <img src="/profile-img.jpeg" alt="Profile" />
                <div className="name">
                  <h3>Edem KPOMACHI</h3>
                  <span>Developper Full-Stack</span>
                </div>
              </div>
          </CVDescription>
          
          <Curriculum>
            <img src="/cv.png" alt="cv download button" />
            <a href="/pdf/French_CV_2024_Edem_KPOMACHI -1.pdf" download>
              <ButtonSecondAlt>
                <b>Download CV</b> <FiDownload size={20}  />
              </ButtonSecondAlt>
            </a>
          </Curriculum>
        </CVContent>        
      </CVContainer>
    </Container>
  )
}