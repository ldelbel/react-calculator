import Navbar from './Navbar';

const styles1 = {
  marginLeft: '50px',
  fontSize: '6em',
  '-webkit-background-clip': 'text',
  backgroundImage: 'linear-gradient(to right, #ff6a00, #ee0979)',
  backgroundSize: '100%',
  '-webkit-text-fill-color': 'transparent',
  '-webkit-text-stroke': '2px black',
};

const styles2 = {
  width: '80%',
  marginLeft: '140px',
  fontSize: '1.2em',

};

const Home = () => (
  <>
    <Navbar />
    <h1 style={styles1}>
      Math Magicians
    </h1>
    <p style={styles2}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed nunc maximus,
      egestas nisi eget, lobortis erat. Morbi laoreet orci nisi, at pharetra elit vulputate
      a. Nulla id feugiat enim. Sed aliquet felis ac ex ornare, sed volutpat nulla suscipit.
      Pellentesque vulputate, eros ut tristique mollis, mi nunc tempus ante,
      sit amet pellentesque lacus ante et ex. Phasellus aliquam cursus arcu vel consequat.
      Phasellus in massa non lacus auctor fermentum a vel ex. Curabitur consectetur,
      turpis dictum ornare elementum, odio ipsum rhoncus enim, et suscipit nunc urna
      id urna. Donec ullamcorper erat arcu, a ultricies justo gravida sollicitudin.
      Etiam ultrices at tortor vel vehicula. Donec auctor sapien mauris, non vehicula
      felis facilisis id. Donec vitae neque et mi convallis maximus eget non erat.
    </p>
  </>
);

export default Home;
