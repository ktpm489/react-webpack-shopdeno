import React from 'react';
import ReactSwipe from 'react-swipe'
import LazyLoad from 'react-lazy-load';
import  "./css.sass"

export default class Sections extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = this.props.Sections.map((item, index) => {
      return item.body.items.map(function (subItem, subIndex) {
        return (
          <div className='item'>
            <div className='img'>
              <LazyLoad >
                <img className='ico lazy' src={subItem.img_url}/>
              </LazyLoad>
              <img  />
              {
                subItem.product_tag ? <img className='tag lazy' src={subItem.product_tag}/> : ""
              }
            </div>
            <div className='info'>
              <div className='name'>
                <p>{subItem.product_name}</p>
              </div>
              <div className='brief'>
                <p>{subItem.product_brief}</p>
              </div>
              <div className='price'>
                <p>{subItem.product_price}</p>
              </div>
            </div>
          </div>
        )
      })
    });


    return (
      <div className='list'>
        <div className='Sections'>
          {items}
        </div>
      </div>
    );
  }
}

