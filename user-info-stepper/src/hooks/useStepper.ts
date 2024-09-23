import { useState } from 'react';

export const useStepper = (totalSteps: number) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const isLastStep = currentStep === totalSteps - 1;

  return { currentStep, nextStep, prevStep, isLastStep };
};
