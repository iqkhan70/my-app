import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
   const [message, setMessage] = useState('');
   useEffect(() => {
      fetch('api/hello')
         .then((response) => response.json())
         .then((data) => setMessage(data.message));
   }, []);

   return (
      <div className="p-4">
         <h1 className="font-bold text-black-500 text-3xl">{message}</h1>
         <button className="bg-blue-500 text-white p-2 rounded-md">
            Click me!
         </button>
      </div>
   );
}

export default App;
