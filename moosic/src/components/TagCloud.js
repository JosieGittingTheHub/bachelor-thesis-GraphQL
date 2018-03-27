import React, { Component } from 'react';
import TagField from './TagField';

class TagCloud extends Component {

  render() {
    var tags = this.props.tags
    console.log(tags)
    let removeFunction = this.props.removeTagByName
    return (
      <div className="tag-cloud" >
          { tags.map(function(tag, i){
            return(<TagField key={i} name={tag} removeTagByName={removeFunction}/>)
            })
          }
      </div>
    );
  }
}

export default TagCloud;