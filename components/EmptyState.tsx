import { type ReactNode } from 'react';
// import Link from 'next/link';
import Button from './Button';
import SearchLgIcon from '../icons/SearchLg.icon';

interface EmptyStateProps {
  title: string;
  desc: string;
  to?: string;
  btnText?: string;
  className?: string;
  btnClassname?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

const EmptyState = ({
  title,
  desc,
  to,
  btnText,
  className,
  btnClassname,
  icon,
  onClick,
}: EmptyStateProps) => {
  return (
    <div className={`w-full flex justify-center h-[calc(100vh-230px)] items-center flex-col ${className}`}>
      <div className="h-12 w-12 flex justify-center items-center rounded-[10px] shadow-xs mb-4 bg-white border border-gray-200">
        <SearchLgIcon />
      </div>
      <p className="text-center text-gray-900 text-lg font-semibold">
        {title}
      </p>
      <p className="text-center text-gray-600 text-sm pt-1 pb-6">{desc}</p>
      {btnText && (onClick || to) && (
        <Button
          className={`w-[138px] text-sm font-semibold gap-1 h-10 ${btnClassname}`}
          href={to}
          title={btnText}
          icon={icon}
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default EmptyState;
