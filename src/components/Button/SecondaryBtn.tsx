type SecondaryBtnProps = {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  variant?: "success" | "error" | "secondary";
  className?: string;
  onClick?: () => void;
};

function SecondaryBtn({
  onClick,
  children,
  type,
  variant = "secondary",
}: SecondaryBtnProps) {
  const classNames = `btn text-white btn-circle btn-sm mt-2 btn-${variant}`;
  return (
    <button type={type || "button"} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export { SecondaryBtn };
