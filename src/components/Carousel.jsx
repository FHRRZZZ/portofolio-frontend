import React from 'react';
import './Carousel.css'

function Carousel() {
  return (
    <div>
      <section id="Skills" className="skills">
        <div className="tabs">
          <h1 className="tabs-h1">Language & Framework</h1>
          <div className="tab-content active" id="about3">
            <div className="carousel-wrapper">
              <div className="carousel1" id="carousel">
                <div className="card">
                  <div className="icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Logo" title="JavaScript" />
                  </div>
                  <div className="text">JavaScript</div>
                </div>
                <div className="card">
                  <div className="icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java Logo" title="Java" />
                  </div>
                  <div className="text">Java</div>
                </div>
                <div className="card">
                  <div className="icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python Logo" title="Python" />
                  </div>
                  <div className="text">Python</div>
                </div>
                <div className="card">
                  <div className="icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP Logo" title="PHP" />
                  </div>
                  <div className="text">PHP</div>
                </div>
                <div className="card">
                  <div className="icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart Logo" title="Dart" />
                  </div>
                  <div className="text">Dart</div>
                </div>
                <div className="card">
                  <div className="icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript Logo" title="TypeScript" />
                  </div>
                  <div className="text">TypeScript</div>
                </div>
              </div>

              <div className="carousel1" id="carousel1">
                <div className="card">
                  <div className="icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js Logo" title="React.js" />
                  </div>
                  <div className="text">React.js</div>
                </div>
                <div className="card">
                  <div className="icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask Logo" title="Flask" />
                  </div>
                  <div className="text">Flask</div>
                </div>
                <div className="card">
                  <div className="icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter Logo" title="Flutter" />
                  </div>
                  <div className="text">Flutter</div>
                </div>
                <div className="card">
                  <div className="icon">
                    <img src="https://laravel.com/img/logomark.min.svg" alt="Laravel Logo" title="Laravel" width="64" height="64" />

                  </div>
                  <div className="text">Laravel</div>
                </div>
                <div className="card">
                  <div className="icon">
                    <img src="https://unpkg.com/simple-icons@v8/icons/tailwindcss.svg" alt="Tailwind CSS Logo" title="Tailwind CSS" width="64" height="64" />
                  </div>
                  <div className="text">Tailwind</div>
                </div>
                <div className="card">
                  <div className="icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap Logo" title="Bootstrap" />
                  </div>
                  <div className="text">Bootstrap</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Carousel;
