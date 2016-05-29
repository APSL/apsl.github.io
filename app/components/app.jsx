import React from 'react'
import { connect } from 'react-redux'

import Error from './error'
import Organization from './organization'
import PopularRepos from './popular-repos'
import Members from './members'
import Footer from './footer'

function App(props) {
  return (
    <div>
      <div className="container">
        <Error error={props.error} />
      </div>
      <Organization
        avatarUrl={props.avatarUrl}
        description={props.description}
        name={props.name}
        htmlUrl={props.htmlUrl}
      />
      <div className="container">
        <PopularRepos
          publicRepos={props.publicRepos}
          htmlUrl={props.htmlUrl}
          repos={props.repos}
        />
        <Members
          members={props.members}
          membersUrl={props.membersUrl}
          numMembers={12}
        />
      </div>
      <Footer
        location={props.location}
        web={props.web}
        email={props.email}
        htmlUrl={props.htmlUrl}
      />
    </div>
  )
}

App.propTypes = {
  avatarUrl: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  htmlUrl: React.PropTypes.string.isRequired,
  publicRepos: React.PropTypes.number,
  repos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  members: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  membersUrl: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired,
  web: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  error: React.PropTypes.bool.isRequired
}

const mapStateToProps = state => state
const ReduxApp = connect(mapStateToProps)(App)
export default ReduxApp
