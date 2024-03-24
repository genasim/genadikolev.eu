import useSetScreenImg from '../hooks/useSetScreenImg'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import useEndpoint from '../hooks/useEndpoint'
import FallbackSpinner from '../components/FallbackSpinner'
import { useTheme } from 'styled-components'
import { GiGraduateCap } from "react-icons/gi";
import { MdWork } from "react-icons/md";

interface JobModel {
  type: string
  name: string
  place?: string
  date?: string
  tags?: string[]
  roles?: {
    title?: string
    occupation?: string
    descriptions?: string[]
  }[]
}

const resolveJobType = (type: string) => {
  switch (type) {
    case 'work':
      return MdWork
    case 'study':
      return GiGraduateCap
    default: return null
  }
}

const ResumePage = () => {
  useSetScreenImg('images/backgrounds/resume.jpg')
  const { data: occupations, isLoading } =
    useEndpoint<JobModel[]>('resume')

  if (isLoading) return <FallbackSpinner />

  return (
    <>
      <VerticalTimeline>
        {occupations?.map(job => {
          const Icon = resolveJobType(job.type)
          const theme = useTheme()

          return (
            <VerticalTimelineElement
              contentStyle={{
                background: theme.accent,
                color: theme.color,
              }}
              contentArrowStyle={{
                borderRight: `9px solid ${theme.accent}`,
              }}
              date={job.date}
              iconStyle={{
                background: theme.accent,
                color: theme.color,
              }}
              icon={Icon && <Icon />}
            >
              {job.tags?.map(tag => (
                <div className="btn btn-secondary mb-3 mx-2">
                  {tag}
                </div>
              ))}
              <div className="d-flex justify-content-between">
                <h3 className="text-primary">
                  <b>{job.name}</b>
                </h3>
                <h4>{job.place}</h4>
              </div>
              {job.roles?.map(role => (
                <div className="my-3">
                  <h4>
                    {role.title}
                    {role.occupation && ` - ${role.occupation}`}
                  </h4>
                  {role.descriptions?.map(description => (
                    <>
                      <span>{description}</span>
                      <br />
                    </>
                  ))}
                </div>
              ))}
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </>
  )
}

export default ResumePage
