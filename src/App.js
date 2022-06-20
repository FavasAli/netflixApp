import "./App.css";
import Banner from "./banner/Banner";
import Row from "./components/Row";
import Nav from "./Nav/Nav";
import request from "./requests";

function App() {
  return (
<>  
      <Nav/>
      <Banner/>
      <div className="app">
        <Row title="NETFILX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} />
      </div>
      <div className="app">
      <Row title="TRENDING" fetchUrl={request.fetchTrending} />
    </div>
    <div className="app">
      <Row title="TOP RATED" fetchUrl={request.fetchTopRated} />
    </div>
    <div className="app">
      <Row title="ACTION MOVIES" fetchUrl={request.fetchActionMovies} />
    </div>
    <div className="app">
      <Row title="COMEDY MOVIES" fetchUrl={request.fetchComedyMovies} />
    </div>
    <div className="app">
      <Row title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies} />
    </div>
    <div className="app">
      <Row title="ROMANCE MOVIES" fetchUrl={request.fetchRomanceMovies} />
    </div>
    <div className="app">
      <Row title="DOCUMENTARIES" fetchUrl={request.fetchDocumentaries} />
    </div>
</>
  );
}

export default App;
