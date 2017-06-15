import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const TextFiledFormGroup = ({ name, value, label, type, placeholder,onChange, error }) => {
  return(
    <div className={classnames("form-group", { 'has-error': error })}>
      <label className="control-label">{label}</label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        className="form-control"
      />
      {error && <span className="help-block">{error}</span>}
    </div>
  )
};

TextFiledFormGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextFiledFormGroup.defaultProps = {
  type: 'text',
};

export default TextFiledFormGroup;
