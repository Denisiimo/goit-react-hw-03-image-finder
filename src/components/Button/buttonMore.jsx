import { ButtonMoreM, BoxM } from './buttonMore.styled';
import PropTypes from 'prop-types';

export const ButtonMore = ({ onClick }) => {
  return (
    <>
      <BoxM>
        <ButtonMoreM onClick={onClick}>More</ButtonMoreM>
      </BoxM>
    </>
  );
};

ButtonMore.propTypes = {
  onClick: PropTypes.func.isRequired
}