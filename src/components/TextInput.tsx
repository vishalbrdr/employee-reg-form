type TextInputProps = {
  name: string;
};

function TextInput({ name }: TextInputProps) {
  return (
    <div>
      <input type="text" name={name} />
    </div>
  );
}

export default TextInput;
