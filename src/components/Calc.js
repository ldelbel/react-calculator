import Navbar from './Navbar';
import App from './calculator/App';

const Calc = () => (
  <>
    <Navbar />
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <App />
    </div>
  </>
);

export default Calc;
