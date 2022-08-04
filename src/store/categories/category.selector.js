import {createSelector} from 'reselect'

const selectCategorReducer = (state) =>state.categories;

export const selectCategories = createSelector(
    [selectCategorReducer],
    (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => 
        categories.reduce((acc,{title,items}) => {
        acc[title.toLowerCase()] = items;
    return acc;}
        , {})


        );