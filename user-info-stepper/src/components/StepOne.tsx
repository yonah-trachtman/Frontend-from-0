import React, { useState } from 'react';

interface StepOneProps {
  userData: any;
  onChange: (data: any) => void;
  onNext: () => void;
}

const StepOne: React.FC<StepOneProps> = ({ userData, onChange, onNext }) => {
  const [firstName, setFirstName] = useState(userData.firstName || '');
  const [lastName, setLastName] = useState(userData.lastName || '');

  const handleNext = () => {
    if (firstName && lastName) {
      onChange({ firstName, lastName });
      onNext();
    }
  };

  return (
    <div>
      <h2>Step 1: Enter Name</h2>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <button onClick={handleNext} disabled={!firstName || !lastName}>
        Next
      </button>
    </div>
  );
};

export default StepOne;
