import Skill from '../components/Skill'

const SkillsPage = () => {
  return (
    <div>
      <h1>Skills page</h1>
      <Skill progress={85} name='Javascript' />
      <Skill progress={80} name='React.js' />
      <Skill progress={60} name='Docker' />
      <Skill progress={100} name='Docker' />
    </div>
  )
}

export default SkillsPage
