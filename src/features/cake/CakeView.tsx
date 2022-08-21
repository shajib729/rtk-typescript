import { useAppDispatch, useAppSelector } from '../../app/hook'
import { cakeActions } from './cakeSlice'

const CakeView = () => {
  const { numOfCake } = useAppSelector((state)=>state.cake)
  const dispatch = useAppDispatch()
  return (
    <div>
        <h2>Number of Cakes : {numOfCake}</h2>
        <button onClick={()=>dispatch(cakeActions.ordered())}>Order Cake</button>
        <button onClick={()=>dispatch(cakeActions.restocked(1))}>Restock Cakes</button>
    </div>
  )
}

export default CakeView