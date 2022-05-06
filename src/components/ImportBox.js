import React, { useRef, useState } from "react";

import FilesList from "./FilesList";

const ImportBox = () => {
  const dropzone = useRef();
  const [files, setFiles] = useState([]);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = async (e) => {
    const transferFiles = e.dataTransfer.items;
    e.preventDefault();

    async function getAllFileEntries(dataTransferItemList) {
      let fileEntries = [];
      let queue = [];
      for (let i = 0; i < dataTransferItemList.length; i++) {
        queue.push(dataTransferItemList[i].webkitGetAsEntry());
      }
      while (queue.length > 0) {
        let entry = queue.shift();
        if (entry.isFile) {
          fileEntries.push(entry);
        } else if (entry.isDirectory) {
          queue.push(...(await readAllDirectoryEntries(entry.createReader())));
        }
      }
      return fileEntries;
    }
    async function readAllDirectoryEntries(directoryReader) {
      let entries = [];
      let readEntries = await readEntriesPromise(directoryReader);
      while (readEntries.length > 0) {
        entries.push(...readEntries);
        readEntries = await readEntriesPromise(directoryReader);
      }
      return entries;
    }
    async function readEntriesPromise(directoryReader) {
      try {
        return await new Promise((resolve, reject) => {
          directoryReader.readEntries(resolve, reject);
        });
      } catch (err) {
        console.log(err);
      }
    }

    async function fileEntryToFile(entries) {
      const FileEntriesList = [];
      FileEntriesList.push(...(await getAllFileEntries(entries)));
      return FileEntriesList;
    }
    let tempFilesList = [];
    const FileEntriesList = await fileEntryToFile(transferFiles);
    FileEntriesList.forEach((e) => {
      e.file((q) => {
        q.type != "" ? (tempFilesList = [...tempFilesList, q]) : null;
        setFiles(tempFilesList);
      });
    });
  };

  return (
    <div
      className="box__import"
      ref={dropzone}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <h2 className="box__title"> Import Box</h2>
      {files.length != 0 ? <FilesList files={files} /> : <h4>Drag Files Here</h4>}
    </div>
  );
};

export default ImportBox;
