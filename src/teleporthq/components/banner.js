import React from 'react'

import PropTypes from 'prop-types'

import './banner.css'
import '../style.css'

const Banner = (props) => {
  return (
    <div className="banner-banner">
      <span className="banner-text">
        <span className="banner-text01">Lorem ipsum dolor sit amet</span>
      </span>
      <h1 className="banner-text02">{props.heading}</h1>
      <span className="banner-text03">
        <span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            volutpat turpis.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span>
          <span>
            Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </span>
      <div className="banner-container">
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="banner-textinput input"
        />
        <button className="banner-button button">{props.button}</button>
      </div>
    </div>
  )
}

Banner.defaultProps = {
  textinput_placeholder: 'Email here...',
  button: 'Subscribe',
  heading: 'Learn to keep it simple',
}

Banner.propTypes = {
  textinput_placeholder: PropTypes.string,
  button: PropTypes.string,
  heading: PropTypes.string,
}

export default Banner
