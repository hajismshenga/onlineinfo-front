import React from 'react';
import FileUpload from './FileUpload';
import FileList from './FileList';
import Profile from './Profile';

const user = { firstName: 'John', lastName: 'Doe' }; // Replace with actual user data

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Profile user={user} />
      <FileUpload />
      <FileList />
    </div>
  );
};

export default Dashboard;
