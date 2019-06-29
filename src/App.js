import React,{Fragment} from 'react';
//fragment nos sirve para no usar los divs esto nos puede ayudar a segmentar codigo en css
import Header from './components/Header'
import Footer from './components/Footer'
import ListaProductos from './components/ListaProductos'
function App() {
  let fecha =new Date().getFullYear()
  return (
    <Fragment>
      <Header titulo='tieda virtual' />
      <ListaProductos/>
      <Footer fecha={fecha}/>
    </Fragment>
  );
}
export default App;
