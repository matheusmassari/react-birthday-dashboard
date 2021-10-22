import React from "react";

function List({ pessoa, setPessoa }) {
    

  return (
    <>
      {pessoa.map(({id, image, name, age}) => {
          
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div className="box-elements">
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>

              <button className='item-btn' onClick={() => setPessoa(pessoa.filter(ele => ele.id !== id)) }>remove</button>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default List;
