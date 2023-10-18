import Image from 'next/image';
import { basePath } from '../../config/config';

export function MenuTopContainer() {

  return (
    <section className='h-[7vh] w-full'>
      <Image
        src={`${basePath}images/logo.png`}
        width={30}
        height={40}
        alt="Logo"
        className='w-[5.8vh] h-[6.2vh]'
      />
    </section>
  )
}