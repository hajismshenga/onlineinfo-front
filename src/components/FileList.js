import React from 'react';

const FileList = () => {
  const files = [
    { name: 'Document1.pdf', dateUploaded: '2024-08-21', signNumber: '1234' },
    { name: 'Image1.jpg', dateUploaded: '2024-08-22', signNumber: '5678' },
  ];

  return (
    <div className="file-list">
      <h2>Your Files</h2>
      <table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Date Uploaded</th>
            <th>Sign Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>{file.dateUploaded}</td>
              <td>{file.signNumber}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileList;
