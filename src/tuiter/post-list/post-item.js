import React from "react";

const PostItem = (
    {
        post = {
            "userName": "Elon Musk",
            "avatarIcon": "../Images/tesla.png",
            "handle": "elonmusk",
            "time": "23h",
            "tuit": "Amazing show about @inspiration4x mission!",
            "tuitImage": "../Images/inspiration.png",
            "imageHeading": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "imageText": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
            "likes": "37.5k",
            "comments": "4.2k",
            "retuits": "3.5k"
        }
    }
) => {
    return(
        <div className="row mt-2 mb-2">
        <div className="col-1">
            <img className="rounded-circle" src={`./images/${post.avatarIcon}`} width={48} height={48}/>
        </div>
        <div className="col-11">
            <div>
            <p>
                <span className="text-black fw-bold">{post.userName}</span>
                {String.fromCharCode(160)}
                {String.fromCharCode(160)}
                <i className="bi bi-check-circle-fill"></i>
                <span className="text-black-50"> @{post.handle}</span>
                {String.fromCharCode(160)}
                <span className="text-black-50">·</span>
                {String.fromCharCode(160)}
                <span className="text-black-50">{post.time} </span><br/>
                <span className="text-black">{post.tuit} </span>
                </p>
            </div >
            
            <div id="has-text" className="mt-2">
                <div className="wd-link-image-border" >
                    <img className="rounded" src={`./images/${post.tuitImage}`} style={{ maxWidth: "100%" }}/>
                </div>
                <div className="wd-link-text-border p-2">
                    <p>
                        <span className="text-black">{post.imageHeading}</span><br/>
                        <span className="text-black-50">{post.imageText}</span>
                    </p>
                </div>
            </div>
            
            <div className="row mt-2">
                <div className="col-3">
                    <i className="bi bi-chat-square-quote-fill"></i>
                    <span className="text-black-50 m-lg-2"> {post.comments} </span>
                </div>
                <div className="col-3">
                    <i className="bi bi-arrow-repeat"></i>

                    <span className="text-black-50 m-lg-2"> {post.retuits} </span>
                </div>
                <div className="col-3">
                    <i className="bi bi-heart"></i>
                    <span className="text-black-50 m-lg-2"> {post.likes} </span>
                </div>
                <div className="col-3">
                    <i className="bi bi-share"></i>
                </div>
            </div>
        </div>
        </div>
    );
}
export default PostItem;