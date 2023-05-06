import React from "react";

function BlogCard(props) {
    return (
        <>

            <div className="blog-card">
                <img className="card-swipe-img" src={props.img} alt="" />
                <div className="card-data">
                    <h4 className="card-title">Blog image Post</h4>
                    <div className="card-date">
                        <span><img src="imgs\calendar.svg" alt="" /></span>
                        <span className="post-date">October 10, 2018</span>
                        <span className="slash"> / </span>
                        <span className="commant">3 Comments</span>
                    </div>
                    <p className="card-describtion">Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
                </div>
            </div>

        </>
    )
}

export default BlogCard;