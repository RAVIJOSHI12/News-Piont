import React from "react";

const Newsitems =(props)=>{
    let { title, descrpition, imageUrl, newsurl, author, date, source } =props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-dark" style={{left:'95%',zIndex:'1'}}>{source}</span>
          <img src={!imageUrl ? "https://komonews.com/resources/media2/16x9/1280/986/center/90/83f20eb3-f568-47ed-b62c-06a2003f1ce9-1.png": imageUrl } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{descrpition}</p>
            <p className="card-text">
              <small className="text-muted"> By {!author ? "Unkown" : author} on{" "} {new Date(date).toGMTString()} </small>
            </p>
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
}

export default Newsitems;
