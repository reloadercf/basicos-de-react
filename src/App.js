import React,{Fragment} from 'react';
//fragment nos sirve para no usar los divs esto nos puede ayudar a segmentar codigo en css
import PrimerComponente from './components/PrimerComponente'

function App() {
  return (
    <Fragment>
      <PrimerComponente/>
      <PrimerComponente/>
      <PrimerComponente/>
    </Fragment>
  );
}
export default App;
