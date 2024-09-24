import React from 'react';

interface SuccessPageProps {
  userData: { firstName: string; lastName: string };
}

const SuccessPage: React.FC<SuccessPageProps> = ({ userData }) => (
  <div>
    <h2>Form Submitted Successfully!</h2>
    <p>Thank you, {userData.firstName} {userData.lastName}!</p>
    <p>We have received your details and saved them to localStorage.</p>
  </div>
);

export default SuccessPage;
