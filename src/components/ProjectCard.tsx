import { styled } from 'styled-components'
import { ProjectModel } from '../types/models'
import Tag from './Tag'

const CardImg = styled.img`
  object-fit: cover;
  height: 20rem;
`

const TagsArea = styled.div`
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  width: auto;
  display: flex;
  flex-wrap: wrap;
`

const ProjectCard: React.FC<ProjectModel> = ({
  image,
  links,
  tags,
  text,
  title,
}) => (
  <span
    className="card bg-accent text-white"
    style={{ maxWidth: '25rem' }}
  >
    <TagsArea>
      {tags?.map(tag => (
        <span
          key={tag}
          className="m-1"
        >
          <Tag label={tag} />
        </span>
      ))}
    </TagsArea>
    <CardImg
      src={image}
      className="card-img-top"
      alt={title}
    />
    <div className="card-body d-flex flex-column">
      <div className="flex-grow-1">
        <h5 className="card-title my-2 text-decoration-underline">
          {title}
        </h5>
        <p className="card-text my-3">{text}</p>
      </div>

      <div className="d-flex flex-wrap">
        {links?.map(link => (
          <a
            key={link.text}
            href={link.href}
            className="btn btn-primary card-link"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  </span>
)

export default ProjectCard
