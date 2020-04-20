import React from 'react'
import { withTranslation } from 'react-i18next';

function Home() {

  const { t } = this.props

  return (
    <div>
      <h1>HOME</h1>
    </div>
  )
}

export default withTranslation()(Home)
