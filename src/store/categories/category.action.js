import createAction from '../../utils/reducer/reducer.utils'
import { CATEGORIES_ACTION_TYPES } from './category.types'



/**
 * It creates an action object with a type of `CATEGORIES_ACTION_TYPES.SET_CATEGORIES` and a payload of
 * `categories`
 * @param categories - This is the array of categories that we want to set in the store.
 */
export const setCategoriesMap = (categories) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES,categories)


export const fetchCategoriesStart = () => createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categories) => createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCESS,
    categories);


export const fetchCategoriesFail = (error) => createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
     error)

