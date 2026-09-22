const BiodataSection = () => {
  return (
    <div className="section" id="detail">
      <p className="section-title">Data diri</p>

      <div className="grid">
        <div>
          <p className="item-label">NIM</p>
          <p className="item-value">2502763</p>
        </div>

        <div>
          <p className="item-label">Program studi</p>
          <p className="item-value">
            Pendidikan Ilmu Komputer
          </p>
        </div>

        <div>
          <p className="item-label">Fakultas</p>
          <p className="item-value">FPMIPA</p>
        </div>

        <div>
          <p className="item-label">
            Tempat dan tanggal lahir
          </p>
          <p className="item-value">
            Bandung, 13 Februari 2007
          </p>
        </div>

        <div>
          <p className="item-label">Domisili</p>
          <p className="item-value">
            Cianjur, Jawa Barat
          </p>
        </div>

        <div>
          <p className="item-label">Hobby</p>
          <p className="item-value">
            Fotografi, Design Grafis
          </p>
        </div>
      </div>
    </div>
  );
};

export default BiodataSection;