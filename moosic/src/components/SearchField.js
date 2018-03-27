import React, { Component } from 'react';

class SearchField extends Component {


  onEnter = (e) => {
    if(e.keyCode === 13)
    {
      var tag = document.getElementById("search__input").value
      if (tag.replace(/\s/g, '').length && tag !== "") {
        this.props.addTag(tag);
        document.getElementById("search__input").value = '';
      }
    }
  }

  render() {
    return (
      <div className="search">
        <input autoFocus type="text" className="search__input" id="search__input" placeholder="Type in your mood" onKeyDown={this.onEnter}/>
      </div>
    );
  }
}

export default SearchField;