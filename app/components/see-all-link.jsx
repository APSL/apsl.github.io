import React from 'react'

const PROP_TYPES = {
  text: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired
}

export default function SeeAllLink({text, url}) {
  return (
    <div className="row">
      <div className="col-md-12">
        <a className="seeAll pull-right" href={url}>
          {text} <i className="fa fa-external-link"></i>
        </a>
      </div>
    </div>
  )
}

SeeAllLink.propTypes = PROP_TYPES
