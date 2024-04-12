import MADFLIX from '../images/MADFLIX.png';

// export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const LOGO = MADFLIX;

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";


//calling TMDB Api call for movies
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDgyZTA3NmJkZWU5ZTNjZDg3OGEwYmRkZDNjZDgyNSIsInN1YiI6IjY1ZjAyYmQyOTQ2MzE4MDE4NTYxYjY3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RNb2nQF_XYGQTcD1YDagHd_SkRwiTiHjKeqK8DUqXmA' 
    //+ process.env.REACT_APP_TMDB_KEY
    ,
    // eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDgyZTA3NmJkZWU5ZTNjZDg3OGEwYmRkZDNjZDgyNSIsInN1YiI6IjY1ZjAyYmQyOTQ2MzE4MDE4NTYxYjY3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RNb2nQF_XYGQTcD1YDagHd_SkRwiTiHjKeqK8DUqXmA
    }
};

//calling movies poster for moviecards
export const  IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

//Background image of whole project
export  const BG_URL = 
'https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg';

//Languages
export const  LANGUAGES = [
  { identifier: 'en', name: 'English' },
  { identifier: 'hindi' ,name: 'Hindi' },
  { identifier: 'spanish' ,name: 'Spanish' },]

//GPT OPEN AI KEY ->generated from open ai site it's not free
export const OPENAI_KEY  = 
 
+process.env.REACT_APP_OPENAI_KEY
 ; 