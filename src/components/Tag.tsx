interface TagProps {
  label?: string
}

const Tag: React.FC<TagProps> = ({ label }) => (
  <span className="bg-primary border border-dark text-white rounded-2 p-2">{label}</span>
)

export default Tag
