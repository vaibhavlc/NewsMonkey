import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,publishedAt,author}=this.props
    return (
      <div>
       <div className="card my-3" style={{width: "18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
     
    <h5 className="card-title">{title}....</h5>
    
   
    
    <p className="card-text">{description}...</p>
    <p  className="text-primary
     fs-6"> By {author} on {new Date(publishedAt).toGMTString()}</p>
    <a href={newsUrl} target="_blank"className="btn btn-sm btn-primary">read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
