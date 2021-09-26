import React from 'react';
import './SearchPage.css';
import {useStateValue} from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
//import Response from './response';
import {Link} from 'react-router-dom';
import Search from './pages/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert'; 

function SearchPage(){
    const [{term}]=useStateValue();
    const {data}=useGoogleSearch(term);
    //console.log(term);
    //Live Mock api call
    //const data = Response;
    //console.log(data?.searchInformation.formattedTotalResults);
    
   return(
       <div className="searchPage">
           <div className="searchPage_header">
              <Link to="/">
               <img className="searchPage_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt=""/> 
              </Link>
            <div className="searchPage_headerBody">
              <Search hideButtons />
              <div className="searchPage_options">
                <div className="searchPage_optionsLeft">
                  <div className="searchPage_option">
                      <SearchIcon/>
                      <Link to="/all">All</Link>
                  </div>
                  <div className="searchPage_option">
                      <DescriptionIcon/>
                      <Link to="/News">News</Link>
                  </div>
                  <div className="searchPage_option">
                      <ImageIcon/>
                      <Link to="/images">Images</Link>
                  </div>
                  <div className="searchPage_option">
                      <LocalOfferIcon/>
                      <Link to="/shopping">shopping</Link>
                  </div>
                  <div className="searchPage_option">
                      <RoomIcon/>
                      <Link to="/Maps">maps</Link>
                  </div>
                  <div className="searchPage_option">
                      <MoreVertIcon/>
                      <Link to="/more">more</Link>
                  </div>
                </div>
                <div className="searchPage_optionsRight">
                <div className="searchPage_option">
                      <Link to="/setting">Setting</Link>
                  </div>
                  <div className="searchPage_option">
                      <Link to="/tool">Tool</Link>
                  </div>
                </div>
              </div>
            </div>
            </div>
           
            { data?.items &&(
                <div className="searchPage_results">
                    <p className="searchPage_resultCount">
                    About 1654876 results  
                    (4000000 seconds) for {term}
                    </p>
                    {data?.items.map((item) => (
                        <div className="searchPage_result">
                            <a href={item.link}>
                                {
                                    item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src&&(
                                        <img className="searchPage_resultImage"
                                        src={item.pagemap?.cse_image[0]?.src}
                                        alt=""
                                        />
                                )
                                }
                                {item.displayLink}
                            </a>
                            <a className="searchPage_resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>   
                            <p className="searchPage_resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                        )
                     )}
                </div>   
            )}
            
            
             
       </div>
   );
}

export default SearchPage;