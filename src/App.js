import React from 'react';
import ColorPicker from './TextForm';

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
