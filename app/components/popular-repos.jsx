import React from 'react'
import Repo from './repo'
import SeeAllLink from './see-all-link'

const PROP_TYPES = {
  publicRepos: React.PropTypes.number,
  htmlUrl: React.PropTypes.string.isRequired,
  repos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
}

export default function Repos({publicRepos, htmlUrl, repos}) {
  let reposRow = null
  let allReposLink = null

  if (repos.length) {
    const repoElements = repos.map(repo => <Repo repo={repo} key={repo.id} />)
    reposRow = <div className="row">{repoElements}</div>
    allReposLink = <SeeAllLink text="All repos" url={htmlUrl} />
  }

  return (
    <section id="popularRepos">
      <h2>
        <a href={htmlUrl}>
          <span className="badge">{publicRepos}</span>
          &nbsp;Public repositories <i className="fa fa-github"></i>
        </a>
      </h2>
      {reposRow}
      {allReposLink}
    </section>
  )
}

Repos.propTypes = PROP_TYPES
