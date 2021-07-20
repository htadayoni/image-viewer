import CategoryItemProps from './Category-Item.props';
import { StyledLink, StyledSpan } from './Category-Item.styled';
import ImgFolder from './../../../../assets/images/folder.png';
import { StyledImage } from './../../../common/Image/Image.styled';
const CategoryItem = (props: CategoryItemProps) => {
  return (
    <StyledLink to={`/cat/${props.id}`} className="categories__item">
      <StyledImage src={ImgFolder} alt={props.name} width={100} />
      <StyledSpan>{props.name}</StyledSpan>
    </StyledLink>
  );
};
export default CategoryItem;
