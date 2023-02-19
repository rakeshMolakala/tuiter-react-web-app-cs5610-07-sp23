const WhoToFollowListItem = (who) => {
    return(`
    <div class="list-group-item list-group-item-action ">
        <div class="row">
            <div class="col-2 align-self-center">
                <img src=${who.avatarIcon} class="rounded-circle" height="48px" width="48px">
            </div>
            <div class="col-7 " style="padding-left: 15px">
                <span>
                <b style="font-size: small">${who.userName}</b>
                    <i class="fa fa-check-circle "></i>
                </span>
                <br>
                <span style="font-size: small">@${who.handle}</span>
            </div>
            <div class="col-3 align-self-center">
                <a href="#" class="btn btn-primary rounded-pill float-end ">Follow</a>
            </div>
        </div>
    </div>`
    );
}
export default WhoToFollowListItem;