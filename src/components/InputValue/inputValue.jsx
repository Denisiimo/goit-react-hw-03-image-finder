import { PureComponent } from 'react';
import { InputVal } from './inputValue.styled';
import PropTypes from 'prop-types';

export class InputValue extends PureComponent {
  render() {
    return (
      <>
        <InputVal
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </>
    );
  }
}

InputValue.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}