import React,{Fragment} from 'react';
//fragment nos sirve para no usar los divs esto nos puede ayudar a segmentar codigo en css
import Header from './components/Header'
import Footer from './components/Footer'
import Productos from './components/Productos'
function App() {
  let fecha =new Date().getFullYear()
  return (
    <Fragment>
      <Header titulo='tieda virtual' />
      <Productos/>
      <Footer fecha={fecha}/>
    </Fragment>
  );
}
export default App;
