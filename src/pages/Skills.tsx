import QuoteCard from '../components/QuoteCard'
import FallbackSpinner from '../components/FallbackSpinner'
import Skill from '../components/Skill'
import useEndpoint from '../hooks/useEndpoint'
import styled from 'styled-components'

interface SkillModel {
  progress: number
  name: string
}

const SkillsSection = styled.div`
  max-width: 46rem;
  width: 100%;
`

const SkillsPage = () => {
  const { data: skills, isLoading } =
    useEndpoint<SkillModel[]>('skills')

  if (isLoading || skills === null) return <FallbackSpinner />

  return (
    <section className="h-100 w-100 d-flex justify-content-around align-items-center">
      <QuoteCard quote="Crafting code, one line at a time" />

      <SkillsSection className="ps-5">
        <section className="gap-0 row-gap-3">
          {skills.map(skill => (
            <Skill
              key={skill.name}
              className="my-5"
              name={skill.name}
              progress={skill.progress}
            />
          ))}
        </section>
      </SkillsSection>
    </section>
  )
}

export default SkillsPage
