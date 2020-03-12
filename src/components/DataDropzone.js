import React, { useCallback, useMemo, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { API } from "aws-amplify";
import { s3Upload } from "../libs/awsLib";
import config from "../config";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#bdbdbd",
  borderStyle: "dashed",
  backgroundColor: "#ffffff",
  color: "#bdbdbd",
  outline: "none",
  transition: ".24s ease-in-out"
};

const acceptStyle = {
  color: "#00e676",
  borderColor: "#00e676",
  backgroundColor: "#f2fff9"
};

const rejectStyle = {
  color: "#ff1744",
  borderColor: "#ff1744",
  backgroundColor: "#ffebef"
};

export default function DataDropzone(props) {
  const file = useRef(null);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function createCSV(csv) {
    return API.post("farms", "/farms", {
      body: csv
    });
  }
  // Why can't I call this handleOnDrop???
  const onDrop = useCallback(async acceptedFiles => {
    file.current = acceptedFiles[0];

    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
        1000000} MB.`
      );
      return;
    }

    setIsLoading(true);

    try {
      const attachment = file.current
        ? await s3Upload(file.current)
        : null;

      await createCSV({ attachment });
      props.history.push("/");
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    rejectedFiles
  } = useDropzone({
    onDrop,
    accept: "text/csv"
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject
  ]);

  return (
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <br />
        <p>Drag 'n drop your CSV, or click to select files</p>
      </div>
    </div>
  );
}