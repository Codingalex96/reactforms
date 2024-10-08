import { useState } from 'react'
import './App.css'
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";

const App = () => {
  // State to hold the token
  const [token, setToken] = useState(null);

  return (
    <div>
      {/* Pass setToken to SignUpForm to update token after signup */}
      <SignUpForm setToken={setToken} />
      
      {/* Pass token to Authenticate for authentication requests */}
      <Authenticate token={token} />
    </div>
  );
};

export default App;