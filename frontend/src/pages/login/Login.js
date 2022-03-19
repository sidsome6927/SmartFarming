import React, { useState } from 'react';
import { Link } from "react-router-dom"; 

import './Login.css';

export default function Login() {
  const [id, setId] = useState('');
  const [pass, setpassWord] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="ID" className="joinInput" type="text" onChange={(event) => setId(event.target.value)} />
        </div>
        <div>
          <input placeholder="Password" className="joinInput mt-20" type="password" onChange={(event) => setpassWord(event.target.value)} />
        </div>
        <Link onClick={e => (!id || !pass) ? e.preventDefault() : null}  to={`/dashboard?id=${id}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}