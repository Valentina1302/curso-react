import React from 'react';
import { TodoProvider } from './TodoContext'
import { AppUI } from './AppUI'
import { Modal } from '../Modal';

function App() {
  return (
    <TodoProvider>
      <AppUI />
      <Modal>

      </Modal>
    </TodoProvider>
  ); 
}

export default App;
