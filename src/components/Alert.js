import React from 'react'

export default function Alert(props) {
  return (
    props.Alert && <div className="alert alert-warning" role="alert">
  {props.Alert.type}{props.Alert.msg}
    </div>
  )
}
