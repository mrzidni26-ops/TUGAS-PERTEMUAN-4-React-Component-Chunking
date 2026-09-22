import zidni from "../assets/zidni.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h1 className="rise d2">Muhammad Zidni Nurfazri</h1>

        <p className="rise d3">
          saya adalah mahasiwa program studi pendidikan ilmu komputer
          di Universitas Pendidikan Indonesia. Saya memiliki minat dalam
          pengembangan front-end, multimedia, dan content kreatif.
        </p>

        <div className="actions rise d3">
          <a className="btn btn-solid" href="#kontak">
            Call me
          </a>

          <a className="btn btn-ghost" href="#detail">
            About Me
          </a>
        </div>
      </div>

      <div className="orb-frame rise d2">
        <div className="orb-ring"></div>
        <div className="orb"></div>

        <img
          src={zidni}
          alt="Foto Muhammad Zidni Nurfazri"
          className="orb-photo"
        />
      </div>
    </div>
  );
};

export default Hero;