import React from 'react'
import Member from './member'

const PROP_TYPES = {
  members: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  membersUrl: React.PropTypes.string.isRequired
}

export default function Members({members, membersUrl}) {
  const memberElements = members.filter(
    m => m.hasOwnProperty('avatar_url') && Boolean(m.avatar_url)
  ).map(
    m => <Member member={m} key={m.id} />
  )

  return (
    <section id="members" className="row">
      <h2>
        <a href={membersUrl}>Awesome team <i className="fa fa-users"></i></a>
      </h2>
      {memberElements}
    </section>
  )
}

Members.propTypes = PROP_TYPES
