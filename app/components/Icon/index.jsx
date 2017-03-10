
import 'font-awesome/css/font-awesome.css'
import React, {Component, PropTypes} from 'react';
import classnames from 'classnames'


const Icon = props => {
  const {type, children,className,...other} = props;
  return (
    <i className={classnames("zx-icon","fa" ,`fa-${type}`,className)} aria-hidden="true" {...other}>{children}</i>
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired
};

export default Icon;