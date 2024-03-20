type PrimaryBtnProps = {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  variant?: "success" | "error";
  className?: string;
  onClick?: () => void;
};

function PrimaryBtn({
  children,
  type,
  variant,
  className,
  onClick,
}: PrimaryBtnProps) {
  const classNames =
    `btn rounded-lg px-10 ${
      variant === "success" ? "btn-success" : "btn-error"
    }` + (className ? ` ${className}` : "");

  return (
    <button type={type || "button"} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export { PrimaryBtn };
