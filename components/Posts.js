import React, { PropTypes, Component } from 'react'
import {List} from 'material-ui/List';

import Post from './Post'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
};

export default class Posts extends Component {
  render() {
    return (
      <div style={styles.root}>
        <List>
          {this.props.posts.map((post, i) =>
            <Post key={i} post={post}/>
          )}
        </List>
      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
}
