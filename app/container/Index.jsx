import React from 'react'
import ReactDOM from 'react-dom'
import ReactSwipe from 'react-swipe'
import autoBind from 'react-autobind'

import HeadSwiper from './HeadSwiper'
import Sections from './Sections'
import Footer from './Footer'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      activeIndex: 0
    }
    autoBind(this);
  }

  onActive(activeIndex) {
    const refReactSwipe = this.refs.refReactSwipe
    refReactSwipe && refReactSwipe.swipe.slide(activeIndex)
    this.onScroolTop(activeIndex)
  }

  transitionEnd(activeIndex) {
    this.setState({activeIndex,}, ()=> {
      this.onScroolTop(activeIndex)
    })
  }

  onScroolTop(activeIndex) {
    const refReactSwipe = this.refs.refReactSwipe
    const domRs = ReactDOM.findDOMNode(refReactSwipe)
    //console.log("domRs.scrollTop ", domRs.scrollTop)
  }

  render() {
    const options = {
      continuous: false,
    }
    return (
      <div className='indexpage'>
        <ReactSwipe ref="refReactSwipe" swipeOptions={options} transitionEnd={this.transitionEnd}>
          <div>
            <HeadSwiper {...this.state} />
            <Sections   {...this.state} />
          </div>
          <div>
            <div class="cart-index-wrap">
              <div class="empt">
                <div class="b3"><a href="/1/#/product/category" class="ui-button ui-button-disable"
                                   data-stat-id="fa2afe92abdbe6c8"
                                   onclick="_msq.push(['trackEvent', '8fb4bea51daee8a5-fa2afe92abdbe6c8', '/1/#/product/category', 'pcpid']);"><span>全部商品</span></a><a
                  href="/1/#/index/recommend" class="ui-button" data-stat-id="d95130cddabc99c5"
                  onclick="_msq.push(['trackEvent', '8fb4bea51daee8a5-d95130cddabc99c5', '/1/#/index/recommend', 'pcpid']);"><span>精选商品</span></a>
                </div>
                <div class="footer">
                  <ul>
                    <li><a href="/1/#/index" data-event="30000000110001002" data-stat-id="c0bf27633dd23ba1"
                           onclick="_msq.push(['trackEvent', '8fb4bea51daee8a5-c0bf27633dd23ba1', '/1/#/index', 'pcpid']);">
                      <div class="nav">
                        <div class="ih ispr"></div>
                        <p>首页</p></div>
                    </a></li>
                    <li><a href="/1/#/product/category" data-event="30000000110001003" data-stat-id="9ea630c22a56ea86"
                           onclick="_msq.push(['trackEvent', '8fb4bea51daee8a5-9ea630c22a56ea86', '/1/#/product/category', 'pcpid']);">
                      <div class="nav">
                        <div class="ic ispr"></div>
                        <p>分类</p></div>
                    </a></li>
                    <li><a href="/1/#/cart/index" data-event="30000000110001006" class="on"
                           data-stat-id="b69d7deb3251be01"
                           onclick="_msq.push(['trackEvent', '8fb4bea51daee8a5-b69d7deb3251be01', '/1/#/cart/index', 'pcpid']);">
                      <div class="nav">
                        <div class="is ispr"></div>
                        <p>购物车</p></div>
                    </a></li>
                    <li><a href="/1/#/user/index" data-event="30000000110001005" data-stat-id="ba3941262f6808de"
                           onclick="_msq.push(['trackEvent', '8fb4bea51daee8a5-ba3941262f6808de', '/1/#/user/index', 'pcpid']);">
                      <div class="nav">
                        <div class="if ispr"></div>
                        <p>我的</p></div>
                    </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1>This is a Page3</h1>
          </div>

          <div>
            <h1>This is a Page4</h1>
          </div>
        </ReactSwipe>
        <Footer activeIndex={this.state.activeIndex} items={this.state.items} onActive={this.onActive}/>
      </div>
    );
  }
}

export default Index;
