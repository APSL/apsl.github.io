import React from 'react'
import { connect } from 'react-redux'

import Error from './error'
import Organization from './organization'
import PopularRepos from './popular-repos'
import Members from './members'
import Footer from './footer'

import shuffle from '../js/shuffle'


const App = React.createClass({
  // propTypes: {
  //   // githubService: React.PropTypes.shape({
  //   //   getOrganizationInfo: React.PropTypes.func.isRequired,
  //   //   getPopularRepos: React.PropTypes.func.isRequired,
  //   //   getMembers: React.PropTypes.func.isRequired
  //   // }).isRequired,
  //   numRepos: React.PropTypes.number.isRequired,
  //   numMembers: React.PropTypes.number.isRequired,
  // },

  // componentDidMount: function() {
  //   this.props.githubService.getOrganizationInfo()
  //     .then(data => this.setState({
  //       avatarUrl: data.avatar_url,
  //       description: data.description,
  //       name: data.name,
  //       publicRepos: data.public_repos,
  //       htmlUrl: data.html_url,
  //       location: data.location,
  //       web: data.blog,
  //       email: data.email
  //     }))
  //     .catch(error => {
  //       this.setState({
  //         avatarUrl: 'https://avatars.githubusercontent.com/u/469968?v=3&s=150',
  //         error: true
  //       })
  //       console.error(error)
  //     })
  //
  //   this.props.githubService.getPopularRepos(this.props.numRepos)
  //     .then(data => this.setState({repos: data}))
  //     .catch(error => {
  //       this.setState({error: true})
  //       console.error(error)
  //     })
  //
  //   this.props.githubService.getMembers()
  //     .then(data => {
  //       shuffle(data)
  //       return this.setState({members: data})
  //     })
  //     .catch(error => {
  //       this.setState({error: true})
  //       console.error(error)
  //     })
  // },

  render: function() {
    return (
      <div>
        <div className="container">
          <Error error={this.props.error} />
        </div>
        <Organization
          avatarUrl={this.props.avatarUrl}
          description={this.props.description}
          name={this.props.name}
          htmlUrl={this.props.htmlUrl}
        />
        <div className="container">
          <PopularRepos
            publicRepos={this.props.publicRepos}
            htmlUrl={this.props.htmlUrl}
            repos={this.props.repos}
          />
          <Members
            members={this.props.members}
            membersUrl={this.props.membersUrl}
            numMembers={9}
          />
        </div>
        <Footer
          location={this.props.location}
          web={this.props.web}
          email={this.props.email}
          htmlUrl={this.props.htmlUrl}
        />
      </div>
    )
  }
})

const mapStateToProps = state => state
const ReduxApp = connect(mapStateToProps)(App)
export default ReduxApp
