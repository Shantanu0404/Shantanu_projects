import React from 'react';

const Home = () => {
  const scrollToFeatures = () => {
    // This function will allow for smooth scrolling to the features section
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container my-5 p-5" style={{ backgroundColor: "#f1f3f5" }}>
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h1 className="display-4 mb-4 text-dark fw-bold">Welcome to Our Website</h1>

          <div className="card mb-4 shadow-lg" style={{ backgroundColor: "#ffffff", borderRadius: "12px" }}>
            <div className="card-body">
              <h2 className="card-title text-primary fw-semibold">Discover Amazing Features</h2>
              <p className="card-text text-muted mb-4">
                Unlock exciting insights and explore innovative solutions designed just for you.
              </p>
              <button
                className="btn"
                style={{
                  backgroundColor: "#0069d9",
                  color: "#fff",
                  transition: "0.3s ease",
                  padding: "12px 25px",
                  borderRadius: "30px",
                  fontSize: "18px"
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#0069d9")}
                onClick={scrollToFeatures}  // Adds smooth scrolling to the features section
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div id="features" className="row">
            <div className="col-md-4">
              <div className="card mb-3 shadow-lg" style={{ backgroundColor: "#ffffff", borderRadius: "12px" }}>
                <div className="card-body">
                  <h3 className="card-title text-secondary">Feature 1</h3>
                  <p className="text-muted">An overview of our first incredible feature, designed for your convenience.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 shadow-lg" style={{ backgroundColor: "#ffffff", borderRadius: "12px" }}>
                <div className="card-body">
                  <h3 className="card-title text-secondary">Feature 2</h3>
                  <p className="text-muted">Discover the second amazing capability that will enhance your experience.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 shadow-lg" style={{ backgroundColor: "#ffffff", borderRadius: "12px" }}>
                <div className="card-body">
                  <h3 className="card-title text-secondary">Feature 3</h3>
                  <p className="text-muted">Dive into our third powerful solution that delivers exceptional value.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
