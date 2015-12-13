import React from 'react'

const PROP_TYPES = {
  repo: React.PropTypes.object.isRequired
}

export default function Repo({repo}) {
  return (
    <div className="col-md-4">
      <div className="panel panel-default repo">
        <div className="panel-heading">
          <h3 className="panel-title">
            <a href={repo.html_url}>{repo.name}</a>
          </h3>
        </div>
        <div className="panel-body">
          {repo.description}
        </div>
        <div className="panel-footer">
          <i className="fa fa-star pull"></i>
          <span className="counter">{repo.stargazers_count}</span>
          <i className="fa fa-code-fork"></i>
          <span className="counter">{repo.forks_count}</span>
          <span className={'pull-right lang ' + repo.language.toLowerCase()}>{repo.language}</span>
        </div>
      </div>
    </div>
  )
}

Repo.propTypes = PROP_TYPES
