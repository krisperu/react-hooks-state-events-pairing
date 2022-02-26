import React from 'react'

function Comment(props) {
  return (
    <Comment>
        <h3>{props.user}</h3>
        <p>{props.content}</p>
    </Comment>
  )
}

export default Comment