import './style.css';
import { useSelector } from 'react-redux';
import { RootState } from './../../../redux/reducers';
import { Category } from './../../../redux/reducers/category/types';
import Link from './Link/Link';
 
function TopMenu() {
  const categories = useSelector((state: RootState) => state.category.list);

  return (
    <div className="topMenu__container--area">
      { categories.map((item: Category) => 
        <Link key={item.id} {...item} />
      )}
    </div>
  );
}

export default TopMenu;
