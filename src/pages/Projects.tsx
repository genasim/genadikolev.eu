import { Col, Container, Row } from 'react-bootstrap'
import FallbackSpinner from '../components/FallbackSpinner'
import ProjectCard from '../components/ProjectCard'
import useEndpoint from '../hooks/useEndpoint'
import { ProjectModel } from '../types/models'

const ProjectsPage = () => {
  const {
    data: projects,
    isLoading,
    error,
  } = useEndpoint<ProjectModel[]>('projects')

  if (isLoading) return <FallbackSpinner />

  if (error) return <h1>Error loading Projects page!</h1>

  return (
    <section className="d-flex justify-content-center">
      <Container>
        <Row>
          {projects?.map(project => (
            <Col
              key={project.title}
              xs={12}
              md={6}
              lg={4}
              className="mb-4 d-flex justify-content-center"
            >
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ProjectsPage
