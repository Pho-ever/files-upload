// import { cn } from "@/lib";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { cva, type VariantProps } from "class-variance-authority";
// import Link from "next/link";
import { type ReactNode } from "react";

export type ButtonProps = {
  href?: string;
  download?: boolean;
  title?: string;
  className?: string;
  [x: string]: unknown;
  isLoading?: boolean;
  icon?: ReactNode;
  prefixIcon?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const buttonStyles = cva(
  "flex shadow-xs items-center font-inter transition duration-500 ease-in-out h-11 text-base justify-center rounded-[8px]  w-full  disabled:cursor-not-allowed font-semibold",
  {
    variants: {
      intent: {
        primary: "bg-primary border border-primary text-white disabled:bg-[#154DD266] disabled:border-none",
        secondary: "bg-white border border-primary text-primary disabled:bg-gray-200",
      },
      centered: {
        true: "mx-auto",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

interface Props extends ButtonProps, VariantProps<typeof buttonStyles> {}

const Button = ({
  href,
  download,
  title,
  className,
  intent,
  centered,
  icon,
  prefixIcon,
  isLoading,
  type,
  disabled,
  ...props
}: Props) => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color: `${intent === "secondary" ? "#0062E4" : "white"}`,
      }}
      spin
    />
  );
  return href ? (
    <a
      href={href}
      className={(`${buttonStyles({ intent, centered })}  ${className!}`)}
      {...props}
      download={download}
    >
      {icon ? icon : null}
      {title}
    </a>
  ) : (
    <>
      {isLoading ? (
        <button
          disabled={isLoading}
          className={(
            `${buttonStyles({
              intent,
              centered,
            })} ${className!} cursor-not-allowed border-none`
          )}
          {...props}
        >
          <Spin indicator={antIcon} />
        </button>
      ) : (
        <button
          type={type || "button"}
          disabled={disabled}
          className={(`${buttonStyles({ intent, centered })}  ${className!}`)}
          {...props}
        >
          {prefixIcon ? prefixIcon : null}
          {title}
          {icon ? icon : null}
        </button>
      )}
    </>
  );
};

export default Button;
