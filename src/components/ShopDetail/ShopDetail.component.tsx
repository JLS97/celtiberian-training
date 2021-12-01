import { useEffect } from "react";
import { useParams } from "react-router"
import { Game } from "../../interfaces";
import Store from "../../Store";

const ShopDetail: React.FC = () => {

const { id } = useParams();

  useEffect(() => {
    Store.getShopDetail(id)
  }, [id])

  return (

      <div>
        {Store.detail.length > 0 ? Store.detail.map((game: Game,i) =>(
          <p key={game.title + i.toString()}>{game.title}</p>
        )): <p>No hay contenido para esta tienda</p>}
      </div>

  )

}

export default ShopDetail
