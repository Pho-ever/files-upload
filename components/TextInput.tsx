import { Input, InputRef } from "antd";
import { type ChangeEventHandler, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import { cn } from "../utils";

interface IProps {
  label?: string;
  suffix?: string | ReactNode;
  placeholder?: string;
  value?: string | number;
  type?: string;
  name?: string;
  prefix?: ReactNode;
  defaultValue?: string | number;
  ref?: React.RefObject<InputRef>;
  min?: number;
  max?: number;
  disabled?: boolean;
  maxLength?: number;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  labelClassName?: string;
  visibilityToggle?: boolean
}

const TextInput = (props: IProps) => {
  const {
    label,
    placeholder,
    value,
    type,
    name,
    prefix,
    onChange,
    defaultValue,
    suffix,
    disabled,
    min,
    max,
    maxLength,
    className,
    labelClassName,
    ref,
    visibilityToggle
  } = props;
  return (
    <div className="w-full  ">
      {label && (
         <div className="mb-[6px]">
        <label
          className={cn(
            " capitalize font-inter !text-sm font-medium text-gray-700",
            labelClassName
          )}
          htmlFor={name}
        >
          {label}{" "}
        </label>
        </div>
      )}
      {type === "password" ? (
        <Input.Password
          placeholder={placeholder}
          value={value}
          id={name}
          name={name}
          className={twMerge(
            `flex h-11 w-full flex-1 font-inter shadow-xs items-center !rounded-lg border border-gray-300  !px-[14px] !py-[10px] !text-sm sm:!text-base !font-normal hover:!border-primary ${className} ${
              disabled ? "!bg-gray-50 !text-black" : "!bg-white !text-gray-700"
            }  placeholder:!text-gray-500`
          )}
          onChange={onChange}
          visibilityToggle={visibilityToggle}
        />
      ) : (
        <Input
          placeholder={placeholder}
          value={value}
          type={type ? type : "text"}
          id={name}
          name={name}
          suffix={suffix}
          maxLength={maxLength}
          prefix={prefix}
          disabled={disabled}
          min={min}
          max={max}
          ref={ref}
          defaultValue={defaultValue}
          className={twMerge(
            `flex h-11 w-full flex-1 font-inter shadow-xs items-center !rounded-lg border border-gray-300 !text-sm sm:!text-base  !px-[14px] !py-[10px] !font-normal  ${className} ${
              disabled ? "!bg-gray-50 !text-black hover:!border-gray-300" : "!bg-white !text-gray-700 hover:!border-primary"
            }  placeholder:!text-gray-500`
          )}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default TextInput;
