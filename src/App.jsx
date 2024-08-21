import { useState } from 'react';
import Contact from './components/contact';

const App = () => {
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = 'password';
    if (password === correctPassword) {
      setIsAuthorized(true);
    } else {
      alert('Password salah!');
    }
  };

  return (
    <div>
      {!isAuthorized ? (
        <div className="login">
          <form onSubmit={handleSubmit}>
            <label>
              Masukkan Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <Contact/>
      )}
    </div>
  );
};

export default App;
