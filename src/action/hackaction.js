import axios from 'axios'

export const submitQueryAction = (search) =>{
  return (dispatch) => {
    return axios.get("http://localhost:3000/hackathon_search",{params:{free:search.free,location:search.location,fromDate:search.fromDate,toDate:search.toDate}})
    .then(res=>{
      dispatch({type:"SET_SEARCH",payload:res.data})
      dispatch({type:"CLEAR_DETAILS"})})
  }
}

export const saveHackathon = (hackathon,user) =>{
  return (dispatch) => {
    return axios.post(`http://localhost:3000/hackathonlist`,{
      user_id:user.user_id,
      hackathon_id:hackathon.id
    })
    .then(res => dispatch({type:'SET_USER',payload:res.data.user}))
  }
}

export const deleteHackathon = (hackathon,user) => {
  return (dispatch) => {
    return axios.post('http://localhost:3000/hackathonlistDelete',{
      user_id:user.user_id,
      hackathon_id:hackathon.id
    })
    .then(res => dispatch({type:'SET_USER',payload:res.data.user}))
  }

}

export const fetchAll = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3000/hackathons')
    .then(res => {
      console.log(res.data)
      dispatch({type:'FETCHED',payload:res.data})})
  }
}
