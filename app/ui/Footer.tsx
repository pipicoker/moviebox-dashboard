import Image from 'next/image'
import moviebox from '../../public/footer.png'

const Footer = () => {
  return (
    <div className='bg-black h-[72px] flex justify-center items-center space-x-2 text-[#6A6A6A]'>
        <p>© 2022</p>
        <div>
          <Image src={moviebox} alt='moviebox' />
        </div>
        
            <p>All Rights Reserved</p>
    </div>
  )
}

export default Footer