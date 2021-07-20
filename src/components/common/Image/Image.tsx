import ImageProps from './Image.props';
import { StyledImage } from './Image.styled';
const Image = (props: ImageProps) => {
  return (
    <StyledImage {...props} />
  );
};
export default Image;
