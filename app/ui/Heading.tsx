import Image from "next/image";
import exportIcon from "../../public/export.jpg"
import filterIcon from "../../public/filter.png"

interface Props {
  heading: string
}

const Heading: React.FC<Props> = ({heading}) => {
  return (
    <div className='py-6 flex justify-between items-center border-b'>
        <h1 className='text-2xl font-semibold'>{heading}</h1>

        <div className='flex space-x-2 text-sm'>
            <div className='flex items-center space-x-2 p-2 border rounded-lg'>
            <Image src={filterIcon} alt="export icon"/>
                <p>Filter</p>
            </div>

            <div className='flex items-center space-x-2 p-2 border rounded-lg'>
              <Image src={exportIcon} alt="export icon"/>
                <p>Export</p>
            </div>
        </div>
    </div>
  )
}

export default Heading