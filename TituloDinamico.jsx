import React, { useState, useEffect } from 'react';

function TituloDinamico() {
  const [texto, setTexto] = useState('');

  useEffect(() => {
    document.title = texto || 'Título Dinâmico';
  }, [texto]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h2>Digite algo para alterar o título da aba:</h2>
      
      <input 
        type="text" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite o título aqui..."
        style={{ 
          padding: '10px', 
          fontSize: '16px', 
          borderRadius: '5px', 
          border: '1px solid #ccc',
          width: '280px'
        }}
      />

      <p style={{ marginTop: '20px', fontSize: '18px', color: '#333' }}>
        <strong>Texto digitado:</strong> {texto}
      </p>
    </div>
  );
}

export default TituloDinamico;