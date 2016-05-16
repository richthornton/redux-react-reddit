import React, { PropTypes, Component } from 'react'
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default class Post extends Component {
  render() {
    const {title, url} = this.props.post;
    return (
        <div>
          <ListItem>
            <Card>
              <CardHeader
                title={title}
              />
              <CardMedia>
                <img src={url} />
              </CardMedia>
            </Card>
          </ListItem>
          <Divider />
        </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
}
