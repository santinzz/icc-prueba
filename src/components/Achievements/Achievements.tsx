import Image from 'next/image';

import { lastAchievements } from '@/info/homeInfo';

const Achievements = () => {
  return (
    <section className='flex flex-col items-center gap-y-6 mt-8'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold bg-white px-6 py-2 rounded-md'>
        Ultimos logros obtenidos
      </h2>
      <section className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4'>
        {lastAchievements.map(({ id, alt, src, description }) => (
          <article key={id} className='flex items-center p-2 w-[400px] gap-x-4'>
            <section>
              <Image
                className='rounded-md'
                src={src}
                alt={alt}
                width={80}
                height={80}
              />
            </section>
            <section>
              <p className='font-bold max-w-[50ch]'>{description}</p>
            </section>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Achievements;
