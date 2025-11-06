
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-2 rounded-md font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-palm-green text-pure-white hover:bg-palm-green/90 focus:ring-palm-green',
    secondary: 'bg-heritage-gold text-pure-white hover:bg-heritage-gold/90 focus:ring-heritage-gold',
    ghost: 'bg-transparent text-palm-green border border-palm-green hover:bg-palm-green hover:text-pure-white focus:ring-palm-green',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
