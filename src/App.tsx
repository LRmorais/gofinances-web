import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyles } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root')


export function App() {

  const [isNewTransacionModalOpen, setIsNewTransacionModalOpen] = useState(false);


  function handleOpenNewTransactionModal(){
    setIsNewTransacionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransacionModalOpen(false);
  }
  
  return (
    <TransactionsProvider>
      <Header  onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransacionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyles />
    </TransactionsProvider>
  );
}