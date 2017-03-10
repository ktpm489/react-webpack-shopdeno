import React from 'react';
import ReactSwipe from 'react-swipe'
import  "./css.sass"

class HeadSwiper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectindex: 0,
      swipecount: this.props.swipedata.length
    }
  }

  swipechanges(e) {
    let index = e % this.state.swipecount;
    this.setState({
      selectindex: index
    })

  }

  render() {
    let swipes = [];
    let swipestyle = {
        height: "3.6rem",
        width: "7.2rem"
      },
      swipeimg = {
        width: "100%"
      };
    let navs = [];

    this.props.swipedata.forEach((item, index) => {
      swipes.push(<div key={index} style={swipestyle}><img style={swipeimg} src={item.img}/></div>)
      navs.push(<li key={index} className={this.state.selectindex == index ? "on" : ''}></li>);
    });

    return (
      <div className='HeadSwiper'>
        <ReactSwipe transitionEnd={this.swipechanges.bind(this) } auto={4000}>
          {swipes}
        </ReactSwipe>
        <ul className='swipe-nav'>
          {navs}
        </ul>
      </div>

    );
  }
}


export default HeadSwiper;




