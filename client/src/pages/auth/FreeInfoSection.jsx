import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FreeInfoSection = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="free-section py-5 bg-light" id="free-info">
      <div className="container">
        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://img.freepik.com/free-vector/free-trial-concept-illustration_114360-7964.jpg"
              alt="Free Service"
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-md-6 text-center text-md-start">
            <h2 className="display-6 fw-bold mb-3 text-primary">Absolutely Free</h2>
            <p className="lead text-dark">
              BloodSupport is a community-driven initiative dedicated to saving lives.
              Our platform is <strong>completely free</strong> — no hidden charges, no subscription, ever.
            </p>
            <p className="text-muted">
              Whether you’re searching for a donor, registering to help, or managing a blood request —
              it’s all on us, forever.
            </p>
            <button
              className="btn btn-danger mt-3 px-4 py-2"
              onClick={scrollToTop}
            >
              Join the Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeInfoSection;
