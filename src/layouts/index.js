import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from '../components/Header'
import '../layouts/index.css'

const SiteWrapper = styled.div`
  margin: 5%;
  background: #fff;
  padding: 5%;
  border-radius: 10px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.1);


`



class TemplateWrapper extends Component {
  componentDidUpdate() {
    this.wrapper.animate([
      { transform: 'translateY(30px)' },
      { transform: 'translateY(-5px)' },
      { transform: 'translateY(0px)' }
    ], {
        duration: 300,
        fill: 'forwards',
        iterations: 1
      })
  }
  render() {
    return (
      <SiteWrapper ref={wrapper => this.wrapper = ReactDOM.findDOMNode(wrapper)}>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header />
        <div>
          {this.props.children()}
        </div>
      </ SiteWrapper>
    )
  }
}


TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
