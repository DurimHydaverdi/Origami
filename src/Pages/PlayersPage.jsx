import React, { useContext } from 'react'
import { ClientsContext } from '../Context/ClientsContext'
import { useParams } from 'react-router-dom';
import PlayersDisplay from '../Components/PlayersDisplay/PlayersDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';

const PlayersPage = () => {
  const { data_product } = useContext(ClientsContext);
  const { playerspageId } = useParams();
  const playerspage = data_product.find((e) => e.id === Number(playerspageId))

  return (
    <div>
      <PlayersDisplay playerspage={playerspage} />
      <DescriptionBox />
    </div>
  )
}

export default PlayersPage
