import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="BodyBags hecho a mano en el sur de la Provincia de Buenos Aires" />
    </div>
  );
}

export default App;

