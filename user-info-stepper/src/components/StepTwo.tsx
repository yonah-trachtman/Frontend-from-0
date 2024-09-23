import React, { useState } from 'react';

interface StepTwoProps {
  userData: any;
  onChange: (data: any) => void;
  onNext: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ userData, onChange, onNext }) => {
  const [age, setAge] = useState(userData.age || '');

  const handleNext = () => {
    if (age) {
      onChange({ age });
      onNext();
    }
  };

  return (
    <div>
      <h2>Step 2: Enter Age</h2>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />
      <button onClick={handleNext} disabled={!age}>
        Next
      </button>
    </div>
  );
};

export default StepTwo;
