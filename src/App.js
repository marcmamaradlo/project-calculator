import Calculator from './components/Caculator';
import { MyProvider } from './context';
import './styles/styles.css'

function App() {
  return (
    <MyProvider>
      <Calculator />
    </MyProvider>
  );
}

export default App;
