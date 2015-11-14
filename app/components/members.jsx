import React from 'react'
import Member from './member'
import SeeAllLink from './see-all-link'

const PROP_TYPES = {
  members: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  membersUrl: React.PropTypes.string.isRequired,
  numMembers: React.PropTypes.number.isRequired
}

export default function Members({members, membersUrl, numMembers}) {
  const memberElements = members
    .filter(m => m.hasOwnProperty('avatar_url') && Boolean(m.avatar_url))
    .slice(0, numMembers)
    .map(m => <Member member={m} key={m.id} />)

  return (
    <section id="members" className="row">
      <h2>
        <a href={membersUrl}>Awesome team <i className="fa fa-users"></i></a>
      </h2>
      {memberElements}
      <SeeAllLink text="All members" url={membersUrl} />
    </section>
  )
}

Members.propTypes = PROP_TYPES
