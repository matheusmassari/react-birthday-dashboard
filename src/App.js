import { useState } from "react";
import List from "./List";
import data from "./data";

function App() {
  const [pessoa, setPessoa] = useState(data);


  function toggleOnOff() {
    pessoa.length > 0 ?
    setPessoa([])
    : setPessoa(data)
  }

  return (
    <>
      <main>
        <section className="container">
          <h3>{pessoa.length} Aniversários hoje</h3>
          <List pessoa = {pessoa} setPessoa={setPessoa}/>
          <button className='btn' onClick={() => toggleOnOff()}>{pessoa.length > 0 ? 'limpar todos' : 'mostrar aniversários'}</button>
        </section>
      </main>
    </>
  );
}

export default App;
