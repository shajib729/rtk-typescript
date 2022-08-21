import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { fetchUsers } from './userSlice'

const UserView = () => {
  const dispatch = useAppDispatch()
  const {loading, users, error} = useAppSelector((state:any)=>state.user)

  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  
  return (
    <div>
        <h2>List of Users</h2>
        {
          loading?
          <h3>Loading...</h3> :
          <div>
            {
              error?
              <h3>Error : {error}</h3>:
              users.map((user:{name:string, id:number},i:number)=>(
                <div key={i}>
                  <br/>
                  <h3>Name : {user.name}</h3>
                  <h3>Id : {user.id}</h3>
                </div>
              ))
            }
          </div>
        }
    </div>
  )
}

export default UserView