import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('/api/ping')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(console.error);
  }, []);

  return (
    <div style={{textAlign:'center', marginTop:'50px'}}>
      <h1>Stocks App</h1>
      <p>API says: {msg || 'loading...'}</p>
    </div>
  );
}

export default App;
