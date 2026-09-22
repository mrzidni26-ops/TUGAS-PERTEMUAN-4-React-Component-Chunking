const ContactSection = () => {
  return (
    <div className="section" id="kontak">
      <div className="kontak-band">
        <h2>Terimakasih dan Salam Kenal</h2>

        <div className="kontak-list">
          <div>
            <p className="item-label">Email</p>

            <a href="mailto:zidninrfzri@gmail.com">
              zidninrfzri@gmail.com
            </a>
          </div>

          <div>
            <p className="item-label">Telepon</p>

            <a href="tel:081234567890">
              0851-5078-6405
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;