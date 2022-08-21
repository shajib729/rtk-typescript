import { useAppDispatch, useAppSelector } from '../../app/hook'
import { iceCreamActions } from './iceCream'

const IceCreamView= () => {
  const {numOfIceCream} = useAppSelector((state)=>state.iceCream)
  const dispatch = useAppDispatch()

  return (
    <div>
        <h2>Number of IceCreams : {numOfIceCream}</h2>
        <button onClick={()=>dispatch(iceCreamActions.ordered())}>Order IceCream</button>
        <button onClick={()=>dispatch(iceCreamActions.restocked(1))}>Restock IceCreams</button>
    </div>
  )
}

export default IceCreamView