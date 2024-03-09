import FallbackSpinner from '../components/FallbackSpinner'
import Skill from '../components/Skill'
import useEndpoint from '../hooks/useEndpoint'

interface SkillModel {
  progress: number
  name: string
}

const SkillsPage = () => {
  const { data: skills, isLoading } =
    useEndpoint<SkillModel[]>('skills')

  if (isLoading || skills === null) return <FallbackSpinner />

  return (
    <div className="grid gap-0 row-gap-3">
      {skills.map(skill => (
        <Skill
          key={skill.name}
          className="my-5"
          name={skill.name}
          progress={skill.progress}
        />
      ))}
    </div>
  )
}

export default SkillsPage
