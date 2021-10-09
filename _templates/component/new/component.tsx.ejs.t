---
to: src/components/<%= path %>/<%= name %>/index.tsx
---
import React from "react"
import styles from "./styles.module.scss"

export type Props = {}

const <%= name %>:React.VFC<Props> = (props) => {
  return <div><%= name %></div>
}

export default <%= name %>