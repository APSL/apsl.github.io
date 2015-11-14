import React from 'react'

import Error from './error'
import Organization from './organization'
import PopularRepos from './popular-repos'
import Members from './members'
import Footer from './footer'

import shuffle from '../js/shuffle'

export default React.createClass({
  propTypes: {
    githubService: React.PropTypes.shape({
      getOrganizationInfo: React.PropTypes.func.isRequired,
      getPopularRepos: React.PropTypes.func.isRequired,
      getMembers: React.PropTypes.func.isRequired
    }).isRequired,
    numRepos: React.PropTypes.number.isRequired,
    numMembers: React.PropTypes.number.isRequired,
  },

  getInitialState: function() {
    return {
      avatarUrl: '',
      description: '',
      name: 'APSL',
      htmlUrl: 'https://github.com/APSL',
      publicRepos: undefined,
      repos: [],
      members: [],
      membersUrl: 'https://github.com/orgs/APSL/people',
      location: 'Palma - Spain',
      web: 'http://apsl.net',
      email: 'info@apsl.net',
      error: false
    }
  },

  componentDidMount: function() {
    this.props.githubService.getOrganizationInfo()
      .then(data => this.setState({
        avatarUrl: data.avatar_url,
        description: data.description,
        name: data.name,
        publicRepos: data.public_repos,
        htmlUrl: data.html_url,
        location: data.location,
        web: data.blog,
        email: data.email
      }))
      .catch(error => {
        this.setState({
          avatarUrl: 'https://avatars.githubusercontent.com/u/469968?v=3&s=150',
          error: true
        })
        console.error(error)
      })

    this.props.githubService.getPopularRepos(this.props.numRepos)
      .then(data => this.setState({repos: data}))
      .catch(error => {
        this.setState({error: true})
        console.error(error)
      })

    this.props.githubService.getMembers()
      .then(data => {
        shuffle(data)
        return this.setState({members: data})
      })
      .catch(error => {
        this.setState({error: true})
        console.error(error)
      })
  },

  render: function() {
    return (
      <div>
        <div className="container">
          <Error error={this.state.error} />
        </div>
        <Organization
          avatarUrl={this.state.avatarUrl}
          description={this.state.description}
          name={this.state.name}
          htmlUrl={this.state.htmlUrl}
        />
        <div className="container">
          <PopularRepos
            publicRepos={this.state.publicRepos}
            htmlUrl={this.state.htmlUrl}
            repos={this.state.repos}
          />
          <Members
            members={this.state.members}
            membersUrl={this.state.membersUrl}
            numMembers={this.props.numMembers}
          />
        </div>
        <Footer
          location={this.state.location}
          web={this.state.web}
          email={this.state.email}
          htmlUrl={this.state.htmlUrl}
        />
      </div>
    )
  }
})
