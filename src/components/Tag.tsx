interface TagProps {
  label?: string
}

const Tag: React.FC<TagProps> = ({ label }) => (
  <span className="bg-secondary rounded-2 m-2 p-1">{label}</span>
)

export default Tag
