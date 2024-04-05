type ErrorMessageProps = {
  error?: string;
};

function ErrorMessage({ error }: ErrorMessageProps) {
  if (!error) return null;
  return (
    <div className="label">
      <span className="label-text-alt text-error">{error}</span>
    </div>
  );
}

export { ErrorMessage };
