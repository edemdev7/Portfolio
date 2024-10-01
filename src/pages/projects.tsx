import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import projects from '../data/projects'
import { Header } from '../components/Header'
import { Links } from '../components/Links'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import * as S from '../styles/projects'
import * as T from '../styles/styles'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { FaSearch } from 'react-icons/fa'
import { ArrowRight } from 'phosphor-react'

interface ProjectsProps {
  target: HTMLInputElement
}

export default function Projects() {
  const [query, setQuery] = useState('')

  const handleChange = (e: ProjectsProps) => {
    setQuery(e.target.value)
  }

  const projectFilter = projects.filter(project =>
    project.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <Head>
        <title>Projects | Edem KPOMACHI </title>
        <meta
          name="description"
          content="Un description des projets réalisés."
        />
        <meta property="og:title" content="Projects | Edem KPOMACHI" />
        <meta
          property="og:description"
          content="Adoro codificar usando ferramentas como React, NextJS, Tailwind, Styled Components e muito mais! Aqui estão alguns dos meus projetos favoritos."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <T.Section>
        <T.Title>
          <p>../projects</p>
          Projects
          <span>
            <HiOutlineDesktopComputer /> Projects
          </span>
        </T.Title>
        <T.Description>
        Vous pouvez voir ici quelques-uns des travaux que j'ai réalisés. Parcourez
          et explorez les projets pour voir comment ils ont été créés, les technologies utilisées et les fonctionnalités mises en œuvre.
        </T.Description>

        <S.ProjectsContainer>
          <S.ProjectsContent>
            <div className="search">
              <p>Recherche par nom de projet</p>

              <div className="input">
                <input
                  type="text"
                  placeholder="Nom du projet..."
                  value={query}
                  onChange={handleChange}
                />
                <FaSearch />
              </div>
            </div>

            {!projectFilter.length && (
              <h3 className="not-found">Projet non trouvé 🙁</h3>
            )}

            {projectFilter.map(project => {
              return (
                <>
                  <div className="border" key={project.id} />
                  <S.ProjectsItem>
                    <div className="banner">
                      <Image
                        width={500}
                        height={300}
                        src={project.img}
                        alt={project.title}
                      />
                    </div>

                    <div>
                      <div className="title">
                        <Image
                          width={20}
                          height={20}
                          src={'/icon.svg'}
                          alt={project.title}
                        />
                        <h2>{project.title}</h2>
                      </div>
                      <div className="description">
                        <p>{project.description}</p>

                        <div className="tags">
                          {project.tags.map(tag => {
                            return <span key={tag.name}>{tag.name}</span>
                          })}
                        </div>
                      </div>
                      <Link href={`/project/${project.url}`}>
                        <a>
                          <T.ButtonAlternatives>
                          Voir le projet
                            <ArrowRight
                              style={{
                                marginBottom: '-0.1rem'
                              }}
                              weight="bold"
                              size={16}
                            />
                          </T.ButtonAlternatives>
                        </a>
                      </Link>
                    </div>
                  </S.ProjectsItem>
                </>
              )
            })}

            <p className="github">
            Hé, hé, hé... J'en ai encore plus sur{' '}
              <a
                href="https://github.com/edemdev7"
                target="_blank"
                rel="noreferrer"
              >
                mon GitHub{' '}
              </a>
              !
            </p>
          </S.ProjectsContent>
        </S.ProjectsContainer>
      </T.Section>
      <Footer />
    </>
  )
}
