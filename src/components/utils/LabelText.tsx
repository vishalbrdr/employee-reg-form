type LabelTextProps = {
  children: React.ReactNode;
};

function LabelText({ children }: LabelTextProps) {
  if (!children) return null;
  return (
    <div className="label">
      <span className="label-text">{children}</span>
    </div>
  );
}

export default LabelText;
