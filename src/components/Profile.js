import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <h2>Welcome, John</h2>
      <div className="profile-pic">
        <img src="path/to/profile-pic.jpg" alt="Profile" />
      </div>
      <div className="profile-details">
        <p>Email: john.doe@example.com</p>
        <p>Phone Number: 123-456-7890</p>
        {/* Add more profile details as needed */}
      </div>
      <div className="upload-container">
        <input type="file" />
        <button>Upload Files</button>
      </div>
      <div className="file-list">
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
            <tr>
              <td>Document1.pdf</td>
              <td>2024-08-21</td>
              <td>1234</td>
              <td className="actions">
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>Image1.jpg</td>
              <td>2024-08-22</td>
              <td>5678</td>
              <td className="actions">
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;
