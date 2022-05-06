import React from 'react'

const File = ({file, isSelected, setSelectedFiles, keyCode}) => {

  const handleClick = (e) => {
    e.stopPropagation()
    console.log(e)

    if (e.ctrKey) {
      console.log("ctrl click")
    }
    setSelectedFiles([keyCode])
  }

  return (
    <li className={`file-list__item ${isSelected ? "selected" : ""}`} onClick={(e) => handleClick(e)}>{file.name}</li>
  )
}

export default File