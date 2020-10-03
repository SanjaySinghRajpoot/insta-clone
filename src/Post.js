import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="ahayder"
                    src="/static/images/avatar/1.jpg"
                />
                <h3>Username</h3>
            </div>

            <img
                className="post__image"
                src="https://specials-images.forbesimg.com/imageserve/5f711ee0dbc9f02046cfbefb/960x0.jpg?fit=scale"
                alt="" />

            <h4 className="post__text"><strong>ahayder</strong> wow I need the iphone 12</h4>
        </div>
    )
}

export default Post
