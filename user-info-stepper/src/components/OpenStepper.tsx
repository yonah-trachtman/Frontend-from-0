import React, { useState } from 'react';
import Modal from './Modal';
import Stepper from './Stepper';

const OpenStepper: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setModalVisible(true)}>Open User Info Stepper</button>
      <Modal isVisible={isModalVisible} onClose={() => setModalVisible(false)}>
        <Stepper />
      </Modal>
    </div>
  );
};

export default OpenStepper;
