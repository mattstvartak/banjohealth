import 'antd/dist/reset.css'
import './App.css'
import Orders from './pages/Orders'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
  return (
    <Orders />
  )
}

export default App
