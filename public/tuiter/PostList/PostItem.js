const PostItem = (post) => {
    let imageHTML = '';
    if (post.imageHeading!== "") {
        imageHTML = `
            <div id="has-text" class="mt-2">
                <div class="wd-link-image-border" >
                    <img class="rounded" src=${post.tuitImage} style="max-width: 100%">
                </div>
                <div class=" wd-link-text-border p-2">
                    <p>
                        <span class="text-white">${post.imageHeading}</span><br>
                        <span class="text-white-50">${post.imageText}</span>
                    </p>
                </div>
            </div>
        `;
    } else {
        imageHTML = `
            <div id="no-text" class="mt-2">
                <div class="wd-only-image-border" >
                    <img class="rounded" src=${post.tuitImage} style="max-width: 100%">
                </div>
            </div>
        `;
    }


    return(`
        <div class="row mt-2 mb-2">
        <div class="col-1">
            <img class="rounded-circle" src=${post.avatarIcon} width="48px" height="48px">
        </div>
        <div class="col-11">
            <div>
            <p>
                <span class="text-white fw-bold">${post.userName}</span> 
                <i class="fa fa-check-circle "></i>
                <span class="text-white-50">@${post.handle}</span> 
                <span class="text-white-50"> · </span> 
                <span class="text-white-50">${post.time} </span><br>
                <span class="text-white">${post.tuit} </span>
                </p>
            </div >
            
            ${imageHTML}
            
            <div class="row mt-2">
                <div class="col-3">
                    <i class="fa-regular fa-comment"></i>
                    <span class="text-white-50 m-lg-2"> ${post.comments} </span>
                </div>
                <div class="col-3">
                    <i class="fa-solid fa-retweet"></i>
                    
                    <span class="text-white-50 m-lg-2"> ${post.retuits} </span>
                </div>
                <div class="col-3">
                    <i class="fa-regular fa-heart"></i>
                    <span class="text-white-50 m-lg-2"> ${post.likes} </span>
                </div>
                <div class="col-3">
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                </div>
            </div>
        
        </div>
        </div>

    `);
}
export default PostItem;