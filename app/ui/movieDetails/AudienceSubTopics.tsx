import { HiOutlineDotsVertical } from "react-icons/hi";
interface ReusableComponentProps {
    topic: string; // Text for the  <h2> element
}
const AudienceSubTopics: React.FC<ReusableComponentProps> = ({topic}) => {
  return (
    <div className="flex justify-between items-center font-semibold">
        <h3>{topic}</h3>
        <HiOutlineDotsVertical />
    </div>
  )
}

export default AudienceSubTopics