import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'


const categories = plantList.reduce(
    (acc, plant) => 
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
)



const ShoppingList = () => {
    return (
         <div>

            <ul>
                {
                    categories.map((cat) => (
                        <li key={cat}>{cat}</li>
                    ))
                }
            </ul>
      
             <ul className='lmj-plant-list'>
          
                {
                
                    plantList.map((plant) => (
                        <li key={plant.id} className='lmj-plant-item'>
                            {plant.name} 
                            {plant.isBestSale ? <span>🔥</span> : null}
                            {plant.isSpecialOffer ? <div className='lmj-sales'>Solde</div>: null}
                        </li>

                    ))

                }
            
            </ul>
         </div>
    )

}

export default ShoppingList