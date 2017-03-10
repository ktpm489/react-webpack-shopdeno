import React, { PropTypes } from 'react'
import autoBind from 'react-autobind';
import classnames from 'classnames'
import Icon from '../Icon'

class FooterNavItem extends React.Component {
  constructor(prop) {
    super(prop);
    autoBind(this)
  }

  onActive() {
    this.context.footerNav && this.context.footerNav.onActive(this.props.activeIndex);
  }

  render() {
    const {type,title,active} = this.props;
    return (
      <li className={classnames("zx-nav__item",{"zx-nav__item-active":active})} onClick={this.onActive}>
        <Icon type={type}/>
        {title}
      </li>
    );
  }
}

FooterNavItem.contextTypes = {
  footerNav: PropTypes.object
}

FooterNavItem.propTypes = {
  onActive: PropTypes.func,
  active: PropTypes.bool
}
FooterNavItem.defaultProps = {
  active: false
}

export default FooterNavItem