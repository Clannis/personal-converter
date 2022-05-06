import React, { useState, useEffect } from "react";
import File from "./File";

const FilesList = ({ files }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    console.log(selectedFiles);
  }, [selectedFiles]);

  return (
    <ul className="file-list">
      {files.map((file, index) => (
        <File
          file={file}
          key={file.name + index}
          keyCode={file.name + index}
          isSelected={selectedFiles.includes(file.name + index)}
          setSelectedFiles={setSelectedFiles}
        />
      ))}
    </ul>
  );
};

export default FilesList;
