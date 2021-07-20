import './style.css';
import { useSelector } from 'react-redux';
import { RootState } from './../../../redux/reducers';
import { Category } from './../../../redux/reducers/category/types';
import CategoryItem from './Catregory-Item/Catregory-Item'
 
function Categories() {
  const categories = useSelector((state: RootState) => state.category.list);

  return (
    <div className="categories__container--area">
      { categories && categories.map((item: Category) => 
        <CategoryItem key={item.id} {...item} />
      )}
    </div>
  );
}

export default Categories;
