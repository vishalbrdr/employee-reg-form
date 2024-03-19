import TextInput from "./components/TextInput";

function App() {
  return (
    <div className="bg-base-300 h-dvh text-center p-3">
      <h1 className="text-xl">Employee Registration Form</h1>
      <form>
        <TextInput name="name" />
      </form>
    </div>
  );
}

export default App;
