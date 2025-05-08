import React from 'react';
import Mode from './Mode';
import ConditinalRender from './ConditinalRender';

const InteractionPanel = () => {
  const handleHover = (e, isEntering) => {
    e.target.style.backgroundColor = isEntering ? '#d0ebff' : '';
  };

  return (
    <section className="container py-5">
      <div className="row gap-4 justify-content-center align-items-center">
        <div className="col-3 text-center">
          <h2 className="mb-3">Theme Switcher</h2>
          <Mode />
        </div>

        <div className="col-3 text-center">
          <h2 className="mb-3">Show/Hide Toggle</h2>
          <ConditinalRender />
        </div>

        <div className="col-3 text-center">
          <h2 className="mb-3">Interactive Hover</h2>
          <button
            className="btn border px-4 py-2"
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            Hover Over
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractionPanel;

