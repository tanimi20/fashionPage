import malaika from "../images/malaika.jpg";
const Herosection = () => {
  return (
    <main className="Hero container">
      <div className="Hero-Content ">
        <h1>Style Sensation</h1>
        <p>
          Malaika Arora, a name that resonates with unparalleled elegance and
          timeless allure in the realm of fashion. With each stride, she
          effortlessly transforms the mundane into the extraordinary, weaving a
          tapestry of style that captivates the world. A true trendsetter,
          Malaika's ensembles exude sophistication and confidence, seamlessly
          blending classic sophistication with avant-garde innovation. Her
          innate sense of style transcends boundaries, inspiring millions to
          embrace their individuality with grace and panache. Whether gracing
          the red carpet or strolling the streets, Malaika's fashion choices
          ignite a symphony of admiration and awe, cementing her status as a
          bona fide fashion icon. With an aura that sparkles with every
          ensemble, Malaika Arora remains the epitome of chic sophistication,
          eternally setting the standard for sartorial excellence.
        </p>
        <div className="buttons-content">
          <button>Get more information</button>
          <button>Exist</button>
        </div>
      </div>
      <div className="Hero-image">
        <img src={malaika} alt="malika" />
      </div>
    </main>
  );
};
export default Herosection;
