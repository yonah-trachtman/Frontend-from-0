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
  const [isCompleted, setIsCompleted] = useState(false); 

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
    return true; 
  };

  
  const handleFinish = () => {
    console.log('Data saved to localStorage:', userData);
    localStorage.setItem('userData', JSON.stringify(userData)); 
    setIsCompleted(true); 
  };

  const steps = [
    <StepOne onNext={nextStep} userData={userData} onChange={handleDataChange} />,
    <StepTwo onNext={nextStep} userData={userData} onChange={handleDataChange} />,
    <StepThree userData={userData} />,
  ];

 
  const SuccessPage: React.FC = () => (
    <div>
      <h2>Form Submitted Successfully!</h2>
      <p>Thank you, {userData.firstName} {userData.lastName}!</p>
      <p>We have received your details and saved them to localStorage.</p>
    </div>
  );

  return (
    <div>
      {isCompleted ? ( 
        <SuccessPage />
      ) : (
        <div>
          {steps[currentStep]}
          <div>
            <button onClick={prevStep} disabled={currentStep === 0}>
              Back
            </button>
            {isLastStep ? (
              <button onClick={handleFinish}>Finish</button>
            ) : (
              <button onClick={nextStep} disabled={!canProceed()}>
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Stepper;
