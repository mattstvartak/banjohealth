import 'antd/dist/reset.css'
import './App.css'
import Orders from './pages/Orders'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import GlobalStyle from './theme/GlobalStyles';

Amplify.configure(awsExports);

function App() {
  return (
    <>
      <GlobalStyle />
      <Orders />
    </>
  )
}

export default App
