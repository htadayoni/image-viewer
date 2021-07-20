import LinkProps from './Link.props';
import { StyledLink } from './Link.styled';
const Link = (props: LinkProps) => {
  return (
    <StyledLink to={`/cat/${props.id}`}>
      {props.name}
    </StyledLink>
  );
};
export default Link;
