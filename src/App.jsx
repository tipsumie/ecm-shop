import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
       <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
