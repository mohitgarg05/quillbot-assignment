import './App.css';
import Navbar from './components/navbar'
import Section2 from './components/section2'
import Section1 from './components/section1';
function App() {
  return (
    <>
      <Navbar />
      <section className='section1'>
        <Section1 />
      </section>
      <section className='section2'>
        <Section2 />
      </section>
    </>
  );
}

export default App;
