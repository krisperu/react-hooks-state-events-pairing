import React from 'react'
import Comment from './Comment'

function CommentsList(props) {
  const thingOne = props.comments.map((comment)=> (
      <Comment 
      key={comment.id}
      user={comment.user}
      content={comment.comment}
      />
      
  ))
    return <main>{thingOne}</main>
}

export default CommentsList