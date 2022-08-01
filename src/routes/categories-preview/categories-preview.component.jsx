import { useContext, Fragment } from "react"

import { CategoriesContext } from "../../contexts/categories.context"
import CategoryPreview from '../../components/category-preview/category-preview.component'


const CategoriesPreview = () => {
    const {CategoriesMap} = useContext(CategoriesContext)
    return (
        <Fragment>
            {
                Object.keys(CategoriesMap).map((title) => {
                    const products = CategoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />
                })
            }
        </Fragment>

)}

export default CategoriesPreview