type SecondaryBtnProps = {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  variant?: "success" | "error";
  className?: string;
  onClick?: () => void;
};

function SecondaryBtn({ onClick, children, type, variant }: SecondaryBtnProps) {
  const classNames = `btn text-white btn-circle btn-sm mt-2 btn-${
    variant || "secondary"
  }`;
  return (
    <button type={type || "button"} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export { SecondaryBtn };
