import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getList } from '../redux/reducers/information'

const Home = () => {
  const dispatch = useDispatch()
  const list = useSelector((store) => store.info)

  useEffect(() => {
    dispatch(getList())
  }, [])

  return <div>

    {JSON.stringify(list)}
  {list.map((d) =>(
  <div key= {`${d.id}`}>
  <div>{d.header}</div>
  <div>{d.city}</div>
  <div>{d.country}</div>
  <div>{d.link}</div>
  <div>{d.discription}</div>
  <div>{d.tags}</div>
  </div>
  )

  )}



  </div>

}

Home.propTypes = {}

export default Home
