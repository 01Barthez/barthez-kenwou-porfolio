import React, { useState } from 'react';

interface CheckoutStep {
  id: string;
  title: string;
  component: React.ComponentType<any>;
  isCompleted: boolean;
}

interface CheckoutProcessProps {
  onComplete: (data: any) => void;
  onCancel: () => void;
}

export const CheckoutProcess: React.FC<CheckoutProcessProps> = ({ onComplete, onCancel }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [checkoutData, setCheckoutData] = useState({});

  // TODO: Define actual checkout steps
  const steps: CheckoutStep[] = [
    {
      id: 'cart-review',
      title: 'Review Cart',
      component: () => <div>Cart Review Step - TODO</div>,
      isCompleted: false,
    },
    {
      id: 'delivery-info',
      title: 'Delivery Information',
      component: () => <div>Delivery Info Step - TODO</div>,
      isCompleted: false,
    },
    {
      id: 'payment',
      title: 'Payment',
      component: () => <div>Payment Step - TODO</div>,
      isCompleted: false,
    },
    {
      id: 'confirmation',
      title: 'Confirmation',
      component: () => <div>Confirmation Step - TODO</div>,
      isCompleted: false,
    },
  ];

  const handleNext = (stepData?: any) => {
    if (stepData) {
      setCheckoutData((prev) => ({ ...prev, ...stepData }));
    }

    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      onComplete(checkoutData);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const currentStep = steps[currentStepIndex];
  const CurrentStepComponent = currentStep.component;

  return (
    <div className="checkout-process">
      {/* Progress indicator */}
      <div className="checkout-progress">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`step-indicator ${index <= currentStepIndex ? 'active' : ''} ${
              step.isCompleted ? 'completed' : ''
            }`}
          >
            <span>{index + 1}</span>
            <span>{step.title}</span>
          </div>
        ))}
      </div>

      {/* Current step content */}
      <div className="checkout-step-content">
        <CurrentStepComponent
          onNext={handleNext}
          onPrevious={handlePrevious}
          checkoutData={checkoutData}
          isFirstStep={currentStepIndex === 0}
          isLastStep={currentStepIndex === steps.length - 1}
        />
      </div>

      {/* Navigation buttons */}
      <div className="checkout-navigation">
        <button onClick={onCancel} className="cancel-button">
          Cancel
        </button>
        {currentStepIndex > 0 && (
          <button onClick={handlePrevious} className="previous-button">
            Previous
          </button>
        )}
      </div>
    </div>
  );
};

// CheckoutProcess exported at declaration site
