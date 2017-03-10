import React from 'react';
import ReactSwipe from 'react-swipe'
import FooterNav from '../components/FooterNav'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {activeIndex,items,...other} = this.props;
    return (
      <FooterNav activeIndex={activeIndex} items={items} {...other}/>
    );
  }
}