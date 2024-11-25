import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Redux provider
import { store } from './redux/store';  // Import the Redux store
import App from './App';                // Import the main App component
import './index.css';                   // Import Tailwind or global CSS styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap with Provider for Redux */}
      <App />
    </Provider>
  </React.StrictMode>
);
