import { GiGraduateCap } from 'react-icons/gi'
import { MdWork } from 'react-icons/md'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { useTheme } from 'styled-components'
import FallbackSpinner from '../components/FallbackSpinner'
import Tag from '../components/Tag'
import useEndpoint from '../hooks/useEndpoint'
import useSetScreenImg from '../hooks/useSetScreenImg'
import uuid from 'react-uuid'

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
    default:
      return null
  }
}

const ResumePage = () => {
  useSetScreenImg('images/backgrounds/resume.jpg')
  const { data: occupations, isLoading } =
    useEndpoint<JobModel[]>('resume')
  const theme = useTheme()

  if (isLoading) return <FallbackSpinner />

  return (
    <>
      <VerticalTimeline>
        {occupations?.map(job => {
          const Icon = resolveJobType(job.type)

          return (
            <VerticalTimelineElement
              key={uuid()}
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
              <div className="mb-3 d-flex gap-2">
                {job.tags?.map(tag => (
                  <Tag
                    key={uuid()}
                    label={tag}
                  />
                ))}
              </div>
              <div className="d-flex justify-content-between flex-wrap">
                <h3 className="text-primary">
                  <b>{job.name}</b>
                </h3>
                <h4>{job.place}</h4>
              </div>
              {job.roles?.map(role => (
                <div
                  key={uuid()}
                  className="my-3"
                >
                  <h4>
                    {role.title}
                  </h4>
                  <ul>
                    {role.descriptions?.map(description => (
                      <li key={uuid()} className='my-2' >{description}</li>
                    ))}
                  </ul>
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
