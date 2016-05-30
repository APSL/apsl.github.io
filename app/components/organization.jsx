import React from 'react'

const LOGO_WIDTH = '150'

const PROP_TYPES = {
  avatarUrl: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  web: React.PropTypes.string.isRequired
}

export default function Organization({avatarUrl, description, name, web}) {
  if (avatarUrl !== '') {
    avatarUrl += '&s=' + LOGO_WIDTH
  }

  return (
    <section id="organization">
      <a href={web}><img width={LOGO_WIDTH} src={avatarUrl} alt={name} /></a>
      <div id="organizationDescription">
        <h1>{description}</h1>
      </div>
    </section>
  )
}

Organization.propTypes = PROP_TYPES
