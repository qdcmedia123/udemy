import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';


class CommedFeed extends Component {
    render() {
            const {comments, postId} = this.props;

           return comments.map(comment=> (

            <CommentItem key = {comment._id} comment = {comment} postId = {postId} />
           ));
        
    }
}




CommedFeed.propTypes = {
    comments: PropTypes.array.isRequired
}

export default CommedFeed;