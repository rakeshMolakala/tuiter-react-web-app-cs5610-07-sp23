import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {

    return(`
            <div class="row wd-padding-left-right">
                <div class="col">
                    <div class="form-group has-search">
                        <span class="fa fa-search form-control-feedback"></span>
                        <input type="text" class="form-control wd-rounded-corners-all-around wd-search-bar" id="search-bar" name="search" placeholder="Search Tuiter">
                    </div>
             
                </div>
                <div class="col-1" style="padding-top: 4px">
                    <a href="#">
                        <i class="fas fa-cog fa-2x"></i>
                    </a>
                </div>
            </div>
            
           <ul class="nav d-flex flex-row mt-2 text-nowrap wd-even-spread-nav-links">
                <li class="nav-item wd-custom-active-nav">
                    <a class="nav-link text-royalblue" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white " href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white " href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block ">
                    <a class="nav-link text-white" href="#">Entertainment</a>
                </li>
           </ul>
           
           <div class="mt-2">
                <div class="position-relative">
                    <img src="../Images/spacex.png" width="100%"  alt="#"/>
                    <h1 class="text-white position-absolute bottom-0 start-0 ms-2 "><b>SpaceX's Starship</b></h1>
                </div>
           </div>          
            
           ${PostSummaryList()}
    `);
}

export default ExploreComponent;
