import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

interface JSONshape {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};


const useFetch = (url:URL['href']):JSONshape|null => {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response:Response = await fetch(url);
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return data;
};

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
       Click me
      </button>
    </div>
  );
}

const App: React.FC = () => {
  return <Example />

};


export default App;
