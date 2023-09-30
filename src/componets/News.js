import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
 defaultProps={
    country:'in',
    page:'1'
   }
  PropTypes={
    country:PropTypes.string,
    page:PropTypes.number
   }
    constructor(props){
        super(props);
        console.log("these is news componetd")
        this.state={
            articles:[],
            loading:false,

            page:1,
            totalResult:0
        }
        document.title=`NewsMonkey-${(this.props.category).charAt(0).toUpperCase()+this.props.category.slice(1)}`
    }
    async componentDidMount(){
     this.props.setProgress(10);
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=380493d7e74c4ecca1b6b49203905fb9&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({
      loading:true
    })
  
      let data=await fetch(url);
      this.props.setProgress(30);
    let pdata=await data.json()
    this.props.setProgress(70);

    this.setState({
      loading:false
    })
    this.setState({
      articles:pdata.articles,
      totalResult:pdata.totalResult
    })
    this.props.setProgress(100);


    }
    handleNext=async()=>{
      this.props.setProgress(10);
      this.setState({
        page:this.state.page+1
      })
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=380493d7e74c4ecca1b6b49203905fb9&page=${this.state.page}&pageSize=${this.props.pageSize}`
      this.setState({
        loading:true
      })
      let data=await fetch(url);
      this.props.setProgress(30);
      let pdata=await data.json()
      this.props.setProgress(70);
      this.setState({

        loading:false
      })
      this.setState({
        articles:pdata.articles,
        
        

      })
      this.props.setProgress(100);
    }
    handlePrevious=async()=>{
      this.props.setProgress(10);
      this.setState({
        page:this.state.page-1
      })
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey==380493d7e74c4ecca1b6b49203905fb9&page=${this.state.page}&pageSize=${this.props.pageSize}`
      this.setState({
        loading:true
      })
      let data=await fetch(url);
      this.props.setProgress(30);

      let pdata=await data.json()
      this.props.setProgress(70);
      this.setState({
        loading:true
      })
      this.setState({
        articles:pdata.articles,
        totalResult:pdata.totalResult
      })
      this.props.setProgress(100);
    }
    fetchMoreData = async() => {
      this.props.setProgress(10);
      this.setState({
        page:this.state.page+1
      })
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=380493d7e74c4ecca1b6b49203905fb9&page=${this.state.page}&pageSize=${this.props.pageSize}`
      this.setState({
        loading:true
      })
      let data=await fetch(url);
      this.props.setProgress(30);
      let pdata=await data.json()
      this.props.setProgress(70);
      this.setState({
        loading:false,
        articles:this.state.articles.concat(pdata.articles),
        
        totalResult:pdata.totalResult

      })
      
        
      this.props.setProgress(100);
      
    };
  

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey - Top {(this.props.category).charAt(0).toUpperCase()+this.props.category.slice(1) } Headline</h1>
    {/* this.state.loading&& <Spinner/>*/}
    <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!=this.state.totalResult}
          loader={<Spinner/>}
        >
          <div className='container'>
<div className='row'>  

{
          /*!this.state.loading && */this.state.articles.map((element)=>{
          
    return <div className='col-md-4' key={element.url}>
    <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://static.thenounproject.com/png/2616533-200.png"} newsUrl={element.url} publishedAt={element.publishedAt?element.publishedAt.slice(0,10):""}  author={element.author}/>
    </div>
    
        })}
        
</div>
</div>
</InfiniteScroll>

{/*<div className='container d-flex justify-content-between' >
<button  disabled={this.state.page<=1}onClick={this.handlePrevious} type="button" class="btn btn-dark"> &larr; Previous</button>
<button  disabled={this.state.page>=136} onClick={this.handleNext} type="button" class="btn btn-dark">Next &rarr;</button>
</div>*/}

      </div>
       
      
  
    )
  }
}

export default News
