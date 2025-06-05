import React,{useEffect,useState} from 'react'
import Newsitems from './Newsitems'
import Loader from './Loader';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

    const updatenews = async () =>{
     props.setProgress(10);
      const url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=94408ab5de1c4127bed0a8b0dd24640b&page=${page}&pagesize=${props.pagesize}`
      setLoading(true);
      let data=await fetch(url)
      props.setProgress(30);
      let parsedData=await data.json()
      props.setProgress(70);
      setArticles(parsedData.articles);
      setLoading(false);
      setTotalResults( parsedData.totalResults)
      props.setProgress(100);
    }

    useEffect(() => {
      updatenews();
      // eslint-disable-next-line 
    }, [])

    

    const fetchMoreData =async() => {
      const url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=94408ab5de1c4127bed0a8b0dd24640b&page=${page+1}&pagesize=${props.pagesize}`
      setPage(page+1)
      let data=await fetch(url)
      let parsedData=await data.json()
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
    };
    
    return (
     <>
        <h1 className='text-center' style={{margin:'35px 0px',marginTop:'90px'}}>News point-Top {props.category}  HeadLine </h1>
        {loading && <Loader/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loader/>}
        > 
           <div className="container">
              <div className="row">
              {articles.map((element)=>{
                  return <div className="col-md-4" key={element.url}>
                  <Newsitems  title={element.title?element.title.slice(0,70):""} descrpition={element.description?element.description.slice(0,94):""} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  </div> 
                })} 
               </div>
           </div>

        </InfiniteScroll>
        
      </>
    )
}

News.defaultProps ={
  // country: 'us',
  pagesize: 5,
  category: 'general'
}

News.propTypes ={
  // country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
}

export default News
