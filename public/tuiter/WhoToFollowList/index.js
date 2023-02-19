import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {

    return(`
    <div class="list-group">
    <div class="list-group-item list-group-item-action wd-rounded-top"> <b>Who To Follow</b> </div>
    ${
        who.map(whoObject => {
            return(WhoToFollowListItem(whoObject));
        }).join('')
    }
    </div>  
   `);
}

export default WhoToFollowList;

