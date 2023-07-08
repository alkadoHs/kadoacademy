import Features from "./components/Features";
import HomeHeader from "./components/HomeHeader";
import Jobs from "./components/Jobs";
import Author from "./components/author";

const App = () => {
  return (
    <div>
      <Jobs />
      <HomeHeader />
      <Author />
      <Features />
    </div>
  );
};

export default App;
