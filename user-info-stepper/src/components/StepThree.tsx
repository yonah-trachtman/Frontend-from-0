import React from 'react';

interface StepThreeProps {
  userData: { firstName: string; lastName: string; age: string };
}

const StepThree: React.FC<StepThreeProps> = ({ userData }) => {
  return (
    <div>
      <h2>Step 3: Review Your Data</h2>
      <p>
        <strong>First Name:</strong> {userData.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {userData.lastName}
      </p>
      <p>
        <strong>Age:</strong> {userData.age}
      </p>
    </div>
  );
};

export default StepThree;
