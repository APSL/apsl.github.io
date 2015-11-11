import React from 'react'

const PROP_TYPES =  {
  error: React.PropTypes.bool.isRequired
}

export default function Error({error}) {
  // In React 0.14 stateless functions cannot return null, 0.15 will fix this.
  // https://github.com/facebook/react/issues/5355
  // <noscript /> is what React currently uses when you return null.
  // https://github.com/facebook/react/issues/5355#issuecomment-152949327
  if (!error) return <noscript />
  return (
    <div id="errorMessage" className="alert alert-danger">
      <strong>D'oh!</strong> Error fetching data from GitHub API. Try to reload the page again &nbsp;
      <a href="javascript:location.reload();" className="alert-link"><i className="fa fa-refresh"></i></a>
    </div>
  )
}

Error.propTypes = PROP_TYPES
