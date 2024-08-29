import './i18n';
import './App.css';
import { Header } from './header/Header.tsx';
function App() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Header />
      <div style={{ height: '100%', width: '100%', backgroundColor: 'red' }}>asd</div>
    </div>
  );
}

export default App;
