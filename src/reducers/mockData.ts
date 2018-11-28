import { FETCH_CATEGORIES, FETCH_RESPONSIBLES, FETCH_TITLE } from '../utils/globals';

const initalMockData = {
  categories: undefined,
  responsibles: undefined,
  titles: undefined
}

export default function (state: any = initalMockData, action: any) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    case FETCH_RESPONSIBLES:
      return {
        ...state,
        responsibles: action.responsibles
      }
    case FETCH_TITLE:
      return {
        ...state,
        titles: action.titles
      }
    default:
      return state;
  }
}