const PostSummaryItem = (post) => {
    let topicHTML = "";
    if (post.topic!=="") {
        topicHTML = `
        <span className="text-white-50">${post.topic}</span>
        <br>`;
    }

    return(`
        <li class="list-group-item pb-0 justify-content-between d-flex">
        <p>
            ${topicHTML}
            <span>
            <b>${post.userName}</b>
                <i class="fa fa-check-circle"></i>
                <span class="text-white-50"> - ${post.time} </span>
            </span><br>
            <b>${post.title}</b>
        </p>
        <div>
            <img class="ms-2 rounded-3" src=${post.image} width="100px" height="100px">
        </div>
        </li>
    `);
}
export default PostSummaryItem;