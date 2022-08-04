import { Route,Routes } from "react-router-dom";
import CategoriesPreview from '../categories-preview/categories-preview.component.jsx'
import Category from '../category/category.component'
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";
import { setCategoriesMap } from "../../store/categories/category.action.js";
import {useDispatch} from 'react-redux'

import './shop.styles.scss'


const Shop = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoriesMap = async() => {

        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(setCategoriesMap(categoriesArray))
        }
        getCategoriesMap();
    // eslint-disable-next-line    
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop;