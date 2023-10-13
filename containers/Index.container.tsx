import Image from 'next/image';
import { basePath } from '../config/config';

export function IndexContainer() {

  return (
    <section className=''>
      <Image
        src={`${basePath}images/logo.png`}
        width={50}
        height={60}
        alt="Logo"
        className='w-[50px] h-[60px]'
      />
    </section>
  )
}