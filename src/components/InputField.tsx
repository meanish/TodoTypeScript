import React from "react";

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ input, setInput, handleAdd }: Props) => {
  //input,setInpput taking any as the type so declaring them as string and func
  return (
    <>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter Your Text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="submit_btn">
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
};

export default InputField;
