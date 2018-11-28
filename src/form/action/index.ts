import axios from 'axios';
import { ADD_TO_EVENT, FETCH_CATEGORIES, FETCH_RESPONSIBLES, FETCH_TITLE } from "../../utils/globals";
import { Dispatch } from 'redux';

const url = "http://www.mocky.io/v2"

export const saveToForm = (params: any) => (dispatch: Dispatch) => {
  dispatch({
    type: ADD_TO_EVENT,
    params: params
  })
}

export const fetchCategories = () => (dispatch: Dispatch<any>) => {
  return axios.get(`${url}/5bcdd3942f00002c00c855ba`).then(resp => {
    dispatch({
      type: FETCH_CATEGORIES,
      categories: resp.data
    });
    dispatch(fetchResponsibles())
    dispatch(fetchTitles())
  }).catch(error =>
    console.log("fetchCoordinator",error)  
  )
};

export const fetchResponsibles = () => (dispatch: Dispatch<any>) => {
  return axios.get(`${url}/5bcdd7992f00006300c855d5`).then(resp => {
    dispatch({
      type: FETCH_RESPONSIBLES,
      responsibles: resp.data
    })
  }).catch((error) => {
    console.log("fetchResponsibles", error)
  })
}

export const fetchTitles = () =>(dispatch: Dispatch<any>) => {
  return axios.get(`${url}/5bcdd8732f00007300c855da`).then(resp => {
    dispatch({
      type: FETCH_TITLE,
      titles: resp.data
    })
  }).catch((error) => {
    console.log("fetchTitles", error)
  })
}