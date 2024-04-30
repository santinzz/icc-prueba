'use client';
import { directionStaff } from '@/info/homeInfo';
import React from 'react';
import { Card } from '@/components/Card';

const Staff = () => {
  return (
    <section className='flex flex-col items-center gap-y-8 mt-8'>
      <section className='space-y-2'>
        <h2 className='text-3xl md:text-5xl font-bold text-center'>
          Equipo directivo
        </h2>
        <p className='text-center text-lg'>
          Conozca a nuestro staff de dirección
        </p>
      </section>
      <section className='max-w-7xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'>
        {directionStaff.map(({ id, name, position, src, alt }) => (
          <Card
            key={id}
            src={src}
            alt={alt}
            heading={name}
            description={position}
          />
        ))}
      </section>
    </section>
  );
};

export default Staff;
