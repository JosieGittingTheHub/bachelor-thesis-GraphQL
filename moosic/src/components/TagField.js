import React, { Component } from 'react';

class TagField extends Component {

  deleteTag = () => {
    this.props.removeTagByName(this.props.name)
  }

  render() {
    return (
      <div className="tag-field" style={{display: 'inline-block'}}>
        <div className="tag-field__delete" onClick={this.deleteTag}>
          x
        </div>
        <div className="tag-field__name">
          {this.props.name}
        </div>
      </div>
    );
  }
}

export default TagField;