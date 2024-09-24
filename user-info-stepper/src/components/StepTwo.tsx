import React from 'react';

interface StepTwoProps {
  onNext: () => void;
  userData: { age: string };
  onChange: (data: any) => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ onNext, userData, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ age: e.target.value });
  };

  return (
    <div>
      <h2>Step 2: Enter Your Age</h2>
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={userData.age}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default StepTwo;
