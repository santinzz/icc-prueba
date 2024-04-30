import { cn } from '@/lib/utils';
import { homePageFont } from '@/lib/homePageFont';

const Hero = () => {
  return (
    <main
      className={cn(
        'flex items-center flex-col space-y-3 pt-64 pb-36',
        homePageFont.className
      )}
    >
      <h1 className='font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
        Instituto Central Coahuila
      </h1>
      <p className='text-amber-500 sm:text-2xl font-extrabold text-xl'>
        Aplicando valores en la comunidad
      </p>
    </main>
  );
};

export default Hero;
