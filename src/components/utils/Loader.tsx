type LoaderProps = {
  message: string;
};

function Loader({ message }: LoaderProps) {
  return (
    <div className="toast toast-top toast-center">
      <div className="alert alert-info">
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Loader;
