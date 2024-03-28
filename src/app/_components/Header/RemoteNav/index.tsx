import React from 'react'

import { Button } from '../../Button'

const RemoteNav = () => {
  return (
    <div>
      <Button
        el="link"
        href="https://my.splashtop.com/sos/packages/download/KK37JYX52AL5"
        label="Remote Support"
        appearance="primary"
        onClick={() => (window.location.href = 'Remote Support')}
      />
    </div>
  )
}

export default RemoteNav
