import React, { useState } from 'react';
import Modal from './components/Modal';
import Stepper from './components/Stepper';

const App: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setModalVisible(true)}>Open Form</button>
      <Modal isVisible={isModalVisible} onClose={() => setModalVisible(false)}>
        <Stepper />
      </Modal>
    </div>
  );
};

export default App;
