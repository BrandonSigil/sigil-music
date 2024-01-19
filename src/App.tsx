import "./App.sass";
import HeaderNav from "./components/HeaderNav/HeaderNav.tsx";
import FeaturedPostGrid from "./components/FeaturedHero/FeaturedPostGrid.tsx";
function App() {
  return (
    <>
      <HeaderNav
        borderRadius={5}
        padding={5}
        justify="space-between"
        dropShadow
      />
      <div
        style={{
          fontSize: "6rem",
          fontWeight: 750,
          display: "flex",
          justifyContent: "center",
        }}
      >
        HELIUM TEST
      </div>
      <FeaturedPostGrid />
    </>
  );
}

export default App;
