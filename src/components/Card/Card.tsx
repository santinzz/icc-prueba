import Image from "next/image";

interface CardProps {
	src: string;
	alt: string;
	heading: string;
	description: string;
}

const Card = ({
	src,
	alt,
	heading,
	description,
}: CardProps) => {

  return (
    <article className='rounded-md bg-white w-[300px] shadow-md'>
      <section>
        <Image
          className='rounded-md rounded-b-none'
          src={src}
          alt={alt}
          width={400}
          height={400}
          style={{ width: '100%', height: 'auto' }}
        />
      </section>
      <section className='p-4'>
        <h3 className='font-bold text-2xl text-center'>{heading}</h3>
        <p className='text-center text-md'>{description}</p>
      </section>
    </article>
  );
};

export default Card;
