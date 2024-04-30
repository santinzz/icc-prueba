import { educationOffer } from '@/info/homeInfo';
import { Card } from '@/components';

const EductionOffer = () => {
  return (
    <section className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-700 to-slate-950 flex flex-col items-center p-8 gap-y-6 mt-20'>
      <h2 className='text-3xl md:text-5xl font-bold bg-white px-6 py-2 rounded-md'>
        Oferta Educativa
      </h2>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {educationOffer.map(({ id, alt, description, src, title }) => (
          <Card
            key={id}
            src={src}
            alt={alt}
            description={description}
            heading={title}
          />
        ))}
      </section>
    </section>
  );
};

export default EductionOffer;
