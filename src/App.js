import { useState } from 'react';
import './App.css';
import ModalLibAA from './components/ModalTest';

function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <button onClick={() => setOpenModal(!openModal)}>OPEN</button>
      {openModal && <ModalLibAA
        openModal={openModal}
        setOpenModal={setOpenModal}
        message="Le message de votre modale"
      />}
    </div>
  );
}

export default App;
