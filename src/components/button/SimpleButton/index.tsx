import React from 'react'

type Props = {
  label: string
  onClick: () => void
}

const SimpleButton: React.VFC<Props> = (props) => {
  const { label, onClick } = props

  return <button onClick={onClick}>{label}</button>
}

export default SimpleButton
