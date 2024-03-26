interface TagProps {
  label?: string
}

const Tag: React.FC<TagProps> = ({ label }) => (
  <span className="bg-secondary text-white rounded-2 p-1">{label}</span>
)

export default Tag
