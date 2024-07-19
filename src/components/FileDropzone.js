import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { uploadLocalFile } from '../modules/fileUpload';
import styles from '../styles/loader.module.css';

const FileDropzone = ({ onDataUpload }) => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'text/csv': ['.csv'],
      'application/octet-stream': ['.parquet']
    },
    onDrop: async (acceptedFiles) => {
      setFiles(acceptedFiles);
      setIsLoading(true);

      const file = acceptedFiles[0];
      const data = await uploadLocalFile(file);
      onDataUpload(data);
      console.log(data);

      setIsLoading(false);
    }
  });

  return (
    <div>
      <div className='flex justify-center'>
        <div
          {...getRootProps()}
          className='flex flex-col items-center justify-center mt-10 w-[44vh] h-64 border-2 shadow-2xl rounded-lg cursor-pointer text-white bg-customGrayLight hover:bg-customGray transition-all duration-300'
        >
          <input {...getInputProps()} />
          {files.length === 0 ? (
            <div>
              <svg
                className='w-8 h-8 mb-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 16'
              >
                <path
                  stroke='currentColor'
                  d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                />
              </svg>
              <p className='mb-2 text-sm'>
                <span className='font-medium'>Click to upload</span> or drag and
                drop
              </p>
            </div>
          ) : (
            <ul>
              {files.map((file) => (
                <li className='font-bold' key={file.path}>
                  {file.name}
                </li>
              ))}
            </ul>
          )}
          {isLoading && <div className={styles.loader}></div>}
        </div>
      </div>
    </div>
  );
};

export default FileDropzone;
