import React from 'react';

const FacebookIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='100'
      height='100'
      viewBox='0 0 24 24'
    >
      <path d='M 12 2 C 6.4666667 2 2 6.4666667 2 12 C 2 17.533333 6.4666667 22 12 22 C 17.533333 22 22 17.533333 22 12 C 22 6.4666667 17.533333 2 12 2 z M 12 4 C 16.466667 4 20 7.5333333 20 12 C 20 16.057491 17.081555 19.336065 13.199219 19.904297 L 13.199219 14.400391 L 15.5 14.400391 L 15.900391 12 L 13.199219 12 L 13.199219 10.699219 C 13.199219 9.6992188 13.500391 8.8007812 14.400391 8.8007812 L 15.900391 8.8007812 L 15.900391 6.8007812 C 15.600391 6.8007812 15.099609 6.6992187 14.099609 6.6992188 C 11.899609 6.6992188 10.699219 7.8003906 10.699219 10.400391 L 10.699219 12 L 8.4003906 12 L 8.4003906 14.400391 L 10.599609 14.400391 L 10.599609 19.873047 C 6.8178865 19.222761 4 15.987292 4 12 C 4 7.5333333 7.5333333 4 12 4 z'></path>
    </svg>
  );
};

export default FacebookIcon;