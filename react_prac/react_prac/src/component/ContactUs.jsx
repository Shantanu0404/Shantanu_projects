import React from "react";

const ContactSection = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('https://source.unsplash.com/1600x900/?landscape,sky')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div
            className="bg-white bg-opacity-90 p-5 shadow rounded-4"
            style={{ backdropFilter: "blur(6px)" }}
          >
            <h2 className="text-center text-primary fw-bold mb-3">Contact Us</h2>
            <p className="text-center text-muted mb-4">
              Have questions or feedback? We're here to help. Drop us a message below.
            </p>

            <form>
              <div className="form-group mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  className="form-control"
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="userEmail" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="userEmail"
                  className="form-control"
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="userMessage" className="form-label">Message</label>
                <textarea
                  id="userMessage"
                  className="form-control"
                  rows="5"
                  placeholder="Share your thoughts..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-outline-primary px-5 py-2"
                  style={{ transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#0d6efd")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
