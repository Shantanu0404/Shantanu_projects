import React from "react";

const ConnectWithUs = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://source.unsplash.com/1600x900/?contact,office')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card border-0 rounded-4 shadow-lg p-4 bg-white bg-opacity-90">
            <div className="card-body">
              <h2 className="text-center text-primary fw-bold mb-3">Contact Us</h2>
              <p className="text-center text-muted mb-4">
                Have a question or feedback? Reach out using the form below, and we'll be in touch shortly.
              </p>

              <form>
                <div className="form-group mb-3">
                  <label htmlFor="fullName" className="form-label">Name</label>
                  <input
                    type="text"
                    id="fullName"
                    className="form-control"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="emailAddress" className="form-label">Email</label>
                  <input
                    type="email"
                    id="emailAddress"
                    className="form-control"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="userMessage" className="form-label">Message</label>
                  <textarea
                    id="userMessage"
                    className="form-control"
                    rows="5"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary px-5 py-2"
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#004a99")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#0d6efd")}
                    style={{
                      backgroundColor: "#0d6efd",
                      border: "none",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
