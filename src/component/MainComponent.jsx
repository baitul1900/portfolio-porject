import ParallaxComponent from "./ParallaxComponent";

const MainComponent = () => {
  return (
    <div>
      <h1>Main Component</h1>
      <ParallaxComponent baseVelocity={-5}>
        Framer Motion
      </ParallaxComponent>{" "}
      {/* First instance of ParallaxComponent */}
      <ParallaxComponent baseVelocity={5}>
        Scroll velocity
      </ParallaxComponent>{" "}
      {/* Second instance of ParallaxComponent */}
    </div>
  );
};

export default MainComponent;
