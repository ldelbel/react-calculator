import Navbar from './Navbar';

const styles1 = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2.5em',
  paddingTop: '120px',
};

const Quote = () => (
  <>
    <Navbar />
    <main style={styles1}>
      <div style={{ width: '80%' }}>
        <p>
          &quot;Mathematics is the most beautiful and
          most powerful creation of the human spirit.&quot;
        </p>
        <p>
          - Stefan Banach
        </p>
      </div>
    </main>
  </>
);

export default Quote;
