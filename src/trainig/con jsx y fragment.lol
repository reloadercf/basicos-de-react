import React,{Fragment} from 'react';
//fragment nos sirve para no usar los divs esto nos puede ayudar a segmentar codigo en css

let empleado={
  nombre:'carlos',
  profesion:'developer'
}

function App() {
  return (
  <Fragment>
    <h1>{empleado.nombre}</h1>
    <p>
      {empleado.profesion}
    </p>
  </Fragment>
  );
}
export default App;
