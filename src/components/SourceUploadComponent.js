import React, { useState, useCallback, useEffect } from 'react'
import FileDropzone from './FileDropzone'
import StreamComponent from './StreamComponent'
import S3Component from './S3Component'

const SourceUploadComponent = ({ onDataLoaded }) => {
  const [activeComponent, setActiveComponent] = useState('filedropzone')

  const handleDataUpload = (data) => {
    onDataLoaded(data)
  }

  const showComponent = (componentName) => {
    return activeComponent === componentName
  }

  return (
    <div className='flex flex-col items-center justify-center bg-white p-2 h-screen'>
      <div className='flex space-x-10 p-2 mb-4 rounded-lg transition-all duration-300'>
        <button
          onClick={() => setActiveComponent('filedropzone')}
          className={`px-4 py-2 rounded-full shadow flex space-x-2  shadow-gray-500 items-center hover:shadow-2xl transition-all duration-300 ${
            activeComponent === 'filedropzone' ? 'shadow-2xl' : 'shadow-md'
          }`}
          title='Upload from your computer'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon icon-tabler icons-tabler-outline icon-tabler-file-upload'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M14 3v4a1 1 0 0 0 1 1h4' />
            <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' />
            <path d='M12 11v6' />
            <path d='M9.5 13.5l2.5 -2.5l2.5 2.5' />
          </svg>
        </button>
        <button
          onClick={() => setActiveComponent('stream')}
          className={`px-4 py-2 rounded-full shadow flex space-x-2  shadow-gray-500 items-center hover:shadow-2xl transition-all duration-300 ${
            activeComponent === 'stream'
              ? 'shadow-2xl'
              : 'shadow-md shadow-gray-300'
          }`}
          title='Load data from an API'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon icon-tabler icons-tabler-outline icon-tabler-link-plus'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M9 15l6 -6' />
            <path d='M11 6l.463 -.536a5 5 0 0 1 7.072 0a4.993 4.993 0 0 1 -.001 7.072' />
            <path d='M12.603 18.534a5.07 5.07 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463' />
            <path d='M16 19h6' />
            <path d='M19 16v6' />
          </svg>
        </button>
      </div>
      <div className='border border-gray-300 overflow-hidden h-[80vh] flex flex-col items-center justify-center rounded-lg'>
        <div
          className={`transition-all duration-500 transform ${
            activeComponent === 'filedropzone'
              ? 'opacity-100 translate-y-60'
              : 'opacity-0 translate-y-0 invisible'
          }`}
        >
          <FileDropzone onDataUpload={handleDataUpload} />
        </div>
        <div
          className={`transition-all duration-500 transform ${
            activeComponent === 'stream'
              ? 'opacity-100 -translate-y-0'
              : 'opacity-0 translate-y-60 invisible'
          }`}
        >
          <StreamComponent onDataUpload={handleDataUpload} />
        </div>
        <div
          className={`transition-all duration-500 transform ${
            activeComponent === 's3'
              ? 'opacity-100 -translate-y-36'
              : 'opacity-0 translate-y-60 invisible'
          }`}
        >
          <S3Component onDataUpload={handleDataUpload} />
        </div>
      </div>
    </div>
  )
}

export default SourceUploadComponent

/*<button
          onClick={() => setActiveComponent('s3')}
          className={`px-4 py-2 rounded-full shadow flex space-x-2  shadow-gray-500 items-center hover:shadow-2xl transition-all duration-300 ${
            activeComponent === 's3'
              ? 'shadow-2xl'
              : 'shadow-md shadow-gray-300'
          }`}
          title='Load data from an Amazon S3 bucket'
        >
          <img src='/s3Logo.png' width={50} height={50} alt='s3 logo' />
        </button>*/
