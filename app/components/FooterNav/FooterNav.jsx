import './style.sass'
import React, {Component, PropTypes} from 'react';
import FooterNavItem from './FooterNavItem'

class FooterNav extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      items: prop.items,
      activeIndex: prop.activeIndex || 0
    }
  }

  getChildContext() {
    return {
      footerNav: this
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({activeIndex: nextProps.activeIndex})
  }

  onActive(activeIndex) {
    const {onActive} = this.props;
    this.setState({activeIndex}, ()=> {
      onActive && onActive(activeIndex);
    })
  }

  render() {
    const {items}  = this.props;
    return (
      <ul className="zx-nav">
        {items.map((item, index)=> {
          return <FooterNavItem key={index}
                                activeIndex={index}
                                active={index===this.state.activeIndex}
                                type={item.icon}
                                title={item.title}/>
        })}
      </ul>
    );
  }
}

FooterNav.childContextTypes = {
  footerNav: PropTypes.instanceOf(FooterNav)
}

FooterNav.propTypes = {
  items: PropTypes.array.isRequired,
}
export default FooterNav;