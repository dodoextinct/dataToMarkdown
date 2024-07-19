import * as Papa from 'papaparse';
import { S3 } from 'aws-sdk';

export async function uploadLocalFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      Papa.parse(text, {
        header: true,
        complete: (results) => {
          resolve(results.data);
        },
        error: (error) => {
          reject(error);
        },
      });
    };
    reader.readAsText(file);
  });
}

export async function uploadAPIFile(apiUrl) {
  const response = await fetch(apiUrl);
  const text = await response.text();
  return new Promise((resolve, reject) => {
    Papa.parse(text, {
      header: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
}

export async function uploadS3File(bucketName, key, region) {
  const s3 = new S3({ region });
  const params = {
    Bucket: bucketName,
    Key: key,
  };
  const data = await s3.getObject(params).promise();
  const text = data.Body.toString('utf-8');
  return new Promise((resolve, reject) => {
    Papa.parse(text, {
      header: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
}