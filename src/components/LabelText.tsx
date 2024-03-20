type LabelTextProps = {
  children: React.ReactNode;
};

function LabelText({ children }: LabelTextProps) {
  return (
    <div className="label">
      <span className="label-text">{children}</span>
    </div>
  );
}

export default LabelText;
