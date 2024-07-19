import React, { useState } from "react";
import AWS from "aws-sdk";

const S3Component = ({ onTableUpload }) => {
  const [bucket, setBucket] = useState("");
  const [fileKey, setFileKey] = useState("");

  const fetchFromS3 = async () => {
    const s3 = new AWS.S3({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });

    const params = {
      Bucket: bucket,
      Key: fileKey,
    };

    const data = await s3.getObject(params).promise();
    const csv = data.Body.toString("utf-8");
    onTableUpload(fileKey, Papa.parse(csv, { header: true }).data);
  };

  return (
    <div>
      <input
        type="text"
        value={bucket}
        onChange={(e) => setBucket(e.target.value)}
        placeholder="Bucket Name"
      />
      <input
        type="text"
        value={fileKey}
        onChange={(e) => setFileKey(e.target.value)}
        placeholder="File Key"
      />
      <button onClick={fetchFromS3}>Fetch Data</button>
    </div>
  );
};

export default S3Component;


