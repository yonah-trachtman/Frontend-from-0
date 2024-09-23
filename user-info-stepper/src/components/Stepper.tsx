import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import { useStepper } from '../hooks/useStepper';

const Stepper: React.FC = () => {
  const { currentStep, nextStep, prevStep, isLastStep } = useStepper(3);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    age: '',
  });

  const handleDataChange = (data: any) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  const canProceed = () => {
    if (currentStep === 0) {
      return userData.firstName !== '' && userData.lastName !== '';
    }
    if (currentStep === 1) {
      return userData.age !== '';
    }
    return true; // Allow to proceed on Step 3 (Review)
  };

  const steps = [
    <StepOne onNext={nextStep} userData={userData} onChange={handleDataChange} />,
    <StepTwo onNext={nextStep} userData={userData} onChange={handleDataChange} />,
    <StepThree userData={userData} />,
  ];

  return (
    <div>
      {steps[currentStep]}
      <div>
        <button onClick={prevStep} disabled={currentStep === 0}>
          Back
        </button>
        {isLastStep ? (
          <button onClick={() => console.log(userData)}>Finish</button>
        ) : (
          <button onClick={nextStep} disabled={!canProceed()}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
