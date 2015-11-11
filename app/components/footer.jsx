import React from 'react'

// Remove protocol and trailing slash
function _beautifyURL(url) {
  if (url.startsWith('https://')) {
    url = url.slice(8)
  } else if (url.startsWith('http://')) {
    url = url.slice(7)
  }
  if (url.endsWith('/')) {
    url = url.slice(0, -1)
  }
  return url
}

const PROP_TYPES = {
  location: React.PropTypes.string.isRequired,
  web: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  htmlUrl: React.PropTypes.string.isRequired
}

export default function Footer({location, web, email, htmlUrl}) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <i className="fa fa-map-marker"></i> {location}
          </div>
          <div className="col-xs-6 col-md-3">
            <a href={web}><i className="fa fa-globe"></i> {_beautifyURL(web)}</a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href={'mailto:' + email}><i className="fa fa-envelope"></i> {email}</a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href={htmlUrl}><i className="fa fa-github"></i> {_beautifyURL(htmlUrl)}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = PROP_TYPES
