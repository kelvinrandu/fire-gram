import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import ProgressBar from "./ProgressBar";



const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };
  return (
    <>
      {" "}
      <form>
        <label>
          <Input type="file" onChange={changeHandler} />
          <span>+</span>
        </label>

        {/* <FormErrorMessage>{error}</FormErrorMessage> */}
        {error && <div>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </form>
    </>
  );
};

export default UploadForm;
