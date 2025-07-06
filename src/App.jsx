import Gallery from "./components/gallery/Gallery";
import LeftBar from "./components/Home/LeftBar";
import TopBar from "./components/Home/TopBar";
import "./index.css";

function App() {
  return (
    <div className="flex gap-6">
      <LeftBar />
      <div className="flex-1  mr-5">
        <TopBar />
        <Gallery/>
      </div>
    </div>
  );
}

export default App;
