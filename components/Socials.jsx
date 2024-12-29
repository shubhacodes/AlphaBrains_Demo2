'use client';

import {
  RiLinkedinFill,
  RiFacebookFill,
  RiInstagramFill,
  RiWhatsappFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: '/',
    name: <RiWhatsappFill size={24} />,
  },
  {
    path: '/',
    name: <RiLinkedinFill size={24} />,
  },
  {
    path: '/',
    name: <RiFacebookFill size={24} />,
  },
  {
    path: '/',
    name: <RiInstagramFill size={24} />,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center space-x-6">
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className="text-black hover:text-gray-600 transition-colors duration-200">
              {icon.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;