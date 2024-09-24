import React from 'react';

interface StepOneProps {
  onNext: () => void;
  userData: { firstName: string; lastName: string };
  onChange: (data: any) => void;
}

const StepOne: React.FC<StepOneProps> = ({ onNext, userData, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Step 1: Enter Your Name</h2>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={userData.firstName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={userData.lastName}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default StepOne;
