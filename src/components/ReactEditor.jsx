import { useState } from "react";
import ReactQuill from "react-quill";

const ReactEditor = () => {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: {
      container: [["image"], [{ header: [1, 2, 3, 4, 5, false] }], ["bold", "underline"]],
    },
  };
  return (
    <>
      <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />
    </>
  );
};
export default ReactEditor;
