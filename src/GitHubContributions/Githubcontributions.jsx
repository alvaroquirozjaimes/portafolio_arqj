import React, { useState } from 'react';
import './GitHubContributions.css';

const GITHUB_USER = 'alvaroquirozjaimes';

const GitHubContributions = () => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError]   = useState(false);

  return (
    <section id="contribuciones" className="section">
      <div className="container">
        <h2 className="section-title">Contribuciones en GitHub</h2>

        <div className="gh-contrib-card">
          <div className="gh-contrib-header">
            <span className="gh-contrib-dot" />
            <span className="gh-contrib-dot" />
            <span className="gh-contrib-dot" />
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-contrib-username"
            >
              github.com/{GITHUB_USER}
            </a>
          </div>

          <div className="gh-contrib-body">
            {!loaded && !error && (
              <div className="gh-contrib-skeleton" aria-hidden="true" />
            )}
            {error && (
              <p className="gh-contrib-error">
                No se pudo cargar el gráfico.{' '}
                <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer">
                  Ver en GitHub →
                </a>
              </p>
            )}
            <img
              src={`https://ghchart.rshah.org/22c55e/${GITHUB_USER}`}
              alt={`Gráfico de contribuciones de ${GITHUB_USER} en GitHub`}
              className={`gh-contrib-img ${loaded ? 'visible' : ''}`}
              onLoad={() => setLoaded(true)}
              onError={() => setError(true)}
            />
          </div>

          <div className="gh-contrib-footer">
            <span>Menos</span>
            <span className="gh-contrib-legend">
              <span style={{ background: '#161b22' }} />
              <span style={{ background: '#0e4429' }} />
              <span style={{ background: '#006d32' }} />
              <span style={{ background: '#26a641' }} />
              <span style={{ background: '#39d353' }} />
            </span>
            <span>Más</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GitHubContributions;