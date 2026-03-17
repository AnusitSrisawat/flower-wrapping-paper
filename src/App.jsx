import { useState } from 'react'
import './App.css'

const heroImage = '/images/header-bg.jpg'
const splitSectionImage = '/images/products/3.jpg'

function App() {
  const [imageErrors, setImageErrors] = useState({})

  const markImageError = (key) => {
    setImageErrors((prev) => ({
      ...prev,
      [key]: true,
    }))
  }

  return (
    <main className="catalog-page">
      <div className="catalog-sheet">
        <header className="catalog-topbar">
          <span className="topbar-left"></span>
          <h1 className="topbar-title">
            <img
              src="/images/sinun_logo_clean_edges.png"
              alt="Sinun logo"
              className="topbar-logo"
              loading="lazy"
            />
          </h1>
          <span className="topbar-right"></span>
        </header>

        <header className="catalog-header" aria-label="Featured and thumbnail area">
          <div className="hero-visual frame">
            {imageErrors.hero ? (
              <div className="image-placeholder">Hero image</div>
            ) : (
              <img
                src={heroImage}
                alt="Featured flower wrapping sample"
                className="media-image"
                loading="lazy"
                onError={() => markImageError('hero')}
              />
            )}
          </div>
        </header>

        <section className="split-section" aria-labelledby="split-section-title">
          <div className="split-text-panel">
            <h2 id="split-section-title">Flower Story</h2>
            <p>
              เรานำเศษวัสดุจากดอกไม้มาออกแบบเป็นกระดาษใช้งานจริง
              เพื่อสร้างมูลค่าใหม่ที่ยังคงความสวยงามและเป็นมิตรต่อสิ่งแวดล้อม
            </p>
          </div>

          <div className="split-image-panel frame">
            {imageErrors['split-section-image'] ? (
              <div className="image-placeholder">Split section image</div>
            ) : (
              <img
                src={splitSectionImage}
                alt="Large product visual"
                className="media-image"
                loading="lazy"
                onError={() => markImageError('split-section-image')}
              />
            )}
          </div>
        </section>
        <section className="split-section" aria-labelledby="split-section-title">
          <div className="split-image-panel frame">
            {imageErrors['split-section-image'] ? (
              <div className="image-placeholder">Split section image</div>
            ) : (
              <img
                src={splitSectionImage}
                alt="Large product visual"
                className="media-image"
                loading="lazy"
                onError={() => markImageError('split-section-image')}
              />
            )}
          </div>

          <div className="split-text-panel">
            <h2 id="split-section-title">Flower Story</h2>
            <p>
              เรานำเศษวัสดุจากดอกไม้มาออกแบบเป็นกระดาษใช้งานจริง
              เพื่อสร้างมูลค่าใหม่ที่ยังคงความสวยงามและเป็นมิตรต่อสิ่งแวดล้อม
            </p>
          </div>
        </section>
        <section className="split-section" aria-labelledby="split-section-title">
          <div className="split-text-panel">
            <h2 id="split-section-title">Flower Story</h2>
            <p>
              เรานำเศษวัสดุจากดอกไม้มาออกแบบเป็นกระดาษใช้งานจริง
              เพื่อสร้างมูลค่าใหม่ที่ยังคงความสวยงามและเป็นมิตรต่อสิ่งแวดล้อม
            </p>
          </div>

          <div className="split-image-panel frame">
            {imageErrors['split-section-image'] ? (
              <div className="image-placeholder">Split section image</div>
            ) : (
              <img
                src={splitSectionImage}
                alt="Large product visual"
                className="media-image"
                loading="lazy"
                onError={() => markImageError('split-section-image')}
              />
            )}
          </div>
        </section>
        <section className="split-section" aria-labelledby="split-section-title">
          <div className="split-image-panel frame">
            {imageErrors['split-section-image'] ? (
              <div className="image-placeholder">Split section image</div>
            ) : (
              <img
                src={splitSectionImage}
                alt="Large product visual"
                className="media-image"
                loading="lazy"
                onError={() => markImageError('split-section-image')}
              />
            )}

            <div className="split-text-panel">
              <h2 id="split-section-title">Flower Story</h2>
              <p>
                เรานำเศษวัสดุจากดอกไม้มาออกแบบเป็นกระดาษใช้งานจริง
                เพื่อสร้างมูลค่าใหม่ที่ยังคงความสวยงามและเป็นมิตรต่อสิ่งแวดล้อม
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App