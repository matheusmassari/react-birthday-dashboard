import { useState } from 'react'
import data from "./data";

function App() {
  const [pessoa, setPessoa] = useState(data)
  console.log(pessoa)

  return (
    <>
      <main>
      <div className='container'>
      <section className="section">
        {data.map((element) => (
          <h3>{element.name}</h3>
        ))}
      </section>
      
      <button className='button'>Clear all</button>
      </div>
      </main>
    </>
  );
}

export default App;
