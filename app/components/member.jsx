import React from 'react'

const AVATAR_WIDTH = '150'

const PROP_TYPES = {
  member: React.PropTypes.object.isRequired
}

export default function Member({member}) {
  const src = member.avatar_url + '&s=' + AVATAR_WIDTH
  return (
    <a href={member.html_url}>
      <img width={AVATAR_WIDTH} src={src} alt={member.login} title={member.login} />
    </a>
  )
}

Member.propTypes = PROP_TYPES
