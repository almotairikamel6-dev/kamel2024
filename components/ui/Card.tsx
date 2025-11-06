import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`bg-pure-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-xl ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;