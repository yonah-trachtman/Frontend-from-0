import React from 'react';

const SuccessPage: React.FC = () => {
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  return (
    <div>
      <h2>Form Submitted Successfully!</h2>
      <p>Thank you, {userData.firstName} {userData.lastName}!</p>
      <p>We have received your details and saved them to localStorage.</p>
    </div>
  );
};

export default SuccessPage;