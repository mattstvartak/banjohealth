import 'antd/dist/reset.css'
import './App.css'
import Orders from './pages/Orders'
import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);

function App() {
  return (
    <Orders />
  )
}

export default App
