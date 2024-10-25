import Image from 'next/image'
import logo from '@/public/Logo.png'
import setting from '../../public/setting.png'
import notification from '../../public/notification.png'
import avatar from '@/public/Avatar.jpg'
import NavLinks from './NavLinks'



const Header = () => {
  return (
    <div className='px-[128px] max-[1280px]:px-[60px]  h-[72px] bg-black flex items-center justify-between'>
        <div className='flex items-center'>
            <Image
            src={logo}
            alt='logo'
            priority
            />

            <div className='ml-8'>
                <NavLinks />
                
            </div>
        </div>
        
        
        <div className='flex items-center space-x-2 text-white'>
          <div className='px-2'>
            <Image src={setting} alt='setting icon'/>
          </div>
            
            <div className='px-2'>
              <Image src={notification} alt='notification icon'/>
            </div>
            
            <Image 
            src={avatar}
            alt='avatar' className='rounded-full'/>
        </div>
    </div>
  )
}

export default Header