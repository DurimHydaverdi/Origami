import React, { useContext } from 'react';
import './CSS/Clients.css';
import { ClientsContext } from '../Context/ClientsContext';
import Players from '../Components/Players/Players';

const Clients = (props) => {
  const { data_product } = useContext(ClientsContext);

  return (
    <div className='clients'>
      <img className='clients-banner' src={props.banner} alt="" />
      <div className="clients-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 players
        </p>
        <div className="clients-sort">
          Sort by
        </div>
      </div>
      <div className="clients-players">
        {data_product && data_product.map((player, i) => (
          <Players key={i} id={player.id} name={player.name} image={player.image} contry_state={player.contry_state} position={player.position} />
        ))}
      </div>
    </div>
  );
}

export default Clients;