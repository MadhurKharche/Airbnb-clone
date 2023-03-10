import Navbar from "./Components/Navbar";
// eslint-disable-next-line
import PhotoGrid from "./Components/PhotoGrid";
import Card from "./Components/Card";
import cards from "./data";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <PhotoGrid />
      <div className="cards-list">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              coverImg={card.coverImg}
              stats={card.stats}
              price={card.price}
              title={card.title}
              location={card.location}
              openSpots={card.openSpots}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
