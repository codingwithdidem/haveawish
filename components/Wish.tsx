import React from 'react';
import User from '@/components/User';

type WishProps = {
  wish: string;
  userId: string;
};

const Wish: React.FC<WishProps> = ({ wish, userId }) => {
  return (
    <div className="gradient-card flex items-center bg-brand-dark border-none mb-4 rouned-md text-white text-lg">
      <User id={userId} />
      <span className="px-3 py-4">{wish}</span>
    </div>
  );
};

export default Wish;
