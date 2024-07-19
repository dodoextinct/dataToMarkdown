import React, { useState } from 'react';
import styles from '../styles/loader.module.css';
import { uploadAPIFile } from '../modules/fileUpload';

const StreamComponent = ({ onDataUpload }) => {
  const [apiUrl, setApiUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await uploadAPIFile(apiUrl);
      onDataUpload(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex shadow-lg border-2 border-black overflow-hidden justify-between rounded-lg w-[32vw]">
        <input
          type="text"
          placeholder="Enter the link (ex. https://support.staffbase.com/hc/en-us/article_attachments/360009197031/username.csv)"
          onChange={(e) => setApiUrl(e.target.value)}
          className="p-2.5 text-sm text-black w-full font-medium"
          style={{ outline: 'none' }}
        />
      </div>
      <div className="w-full flex justify-end">
        <button
          className="p-2 rounded-lg bg-customGrayLight hover:bg-customGray text-white text-xs mt-4 shadow-lg shadow-gray-300 transition-all duration-300"
          onClick={fetchData}
        >
          Done
        </button>
      </div>
      {isLoading && <div className={styles.loader}></div>}
    </div>
  );
};

export default StreamComponent;
