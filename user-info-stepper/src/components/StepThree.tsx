import React from 'react';

interface StepThreeProps {
  userData: any;
}

const StepThree: React.FC<StepThreeProps> = ({ userData }) => {
  return (
    <div>
      <h2>Step 3: Review Information</h2>
      <p>First Name: {userData.firstName}</p>
      <p>Last Name: {userData.lastName}</p>
      <p>Age: {userData.age}</p>
    </div>
  );
};

export default StepThree;
