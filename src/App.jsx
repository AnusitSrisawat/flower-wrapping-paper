import { useState } from 'react'
import './App.css'

const heroImage = '/images/header-bg.jpg'
const historyImage = '/images/history.jpg'
const productImage1 = '/images/products/1.jpg'
const productImage2 = '/images/products/2.jpg'
const productImage3 = '/images/products/3.jpg'
const productImage4 = '/images/products/4.jpg'
const productImage5 = '/images/products/5.jpg'
const productImage6 = '/images/products/6.jpg'
const productImage7 = '/images/products/7.jpg'

const showcaseImages = [productImage1, productImage2, productImage3, productImage4, productImage5, productImage6, productImage7]

const founders = [
  {
    name: 'Founder 01',
    role: 'Creative & Product Design',
    bio: 'ดูแลแนวคิดการออกแบบผลิตภัณฑ์จากวัสดุดอกไม้ ให้ใช้งานได้จริงและยังคงความงดงามของธรรมชาติ',
  },
  {
    name: 'Founder 02',
    role: 'Material & Production',
    bio: 'พัฒนากระบวนการแปรรูปและคุณภาพเนื้อกระดาษให้มีความสม่ำเสมอ รองรับการผลิตในงานบรรจุภัณฑ์หลากหลายรูปแบบ',
  },
  {
    name: 'Founder 03',
    role: 'Brand & Sustainability',
    bio: 'วางทิศทางแบรนด์และการสื่อสารคุณค่าด้านความยั่งยืน เพื่อให้ลูกค้ารับรู้ผลกระทบเชิงบวกได้อย่างชัดเจน',
  },
]

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
          <span className="topbar-left">
          </span>
          <h1 className="topbar-title">
            <img
              src="/images/sinun_logo_clean_edges.png"
              alt="Sinun logo"
              className="topbar-logo"
              loading="lazy"
            />
          </h1>
          <span className="topbar-right">
            <nav className="topbar-nav">
              <a href="#story">Our Story</a>
              <a href="#products">Products</a>
              <a href="#founders">Founders</a>
            </nav>
          </span>
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

        <section id="show-products" className="show-products" aria-label="Product showcase">
          <div className="show-products-viewport">
            <div className="show-products-track">
              {[0, 1, 2, 3, 4].map((groupIndex) => (
                <div
                  key={`group-${groupIndex}`}
                  className="show-products-group"
                  aria-hidden={groupIndex === 1}
                >
                  {[...showcaseImages, ...showcaseImages].map((src, idx) => (
                    <div key={`${groupIndex}-${src}-${idx}`} className="show-products-item frame">
                      {imageErrors[`show-${groupIndex}-${idx}`] ? (
                        <div className="image-placeholder">Showcase image</div>
                      ) : (
                        <img
                          src={src}
                          alt="Product showcase"
                          className="showcase-image"
                          loading="lazy"
                          onError={() => markImageError(`show-${groupIndex}-${idx}`)}
                        />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="split-section" aria-labelledby="story-title">
          <div className="split-image-panel split-image-panel--history frame">
            {imageErrors['split-section-image'] ? (
              <div className="image-placeholder">Split section image</div>
            ) : (
              <img
                src={historyImage}
                alt="Large product visual"
                className="media-image media-image--history"
                loading="lazy"
                onError={() => markImageError('split-section-image')}
              />
            )}
          </div>

          <div className="split-text-panel">
            <h2 id="story-title">Origin &amp; Concept</h2>
            <p>
              ธุรกิจของเราเริ่มต้นจากความผูกพันของครอบครัวสมาชิกในทีมกับวิถีชีวิตของคนไทย ที่ดอกไม้และพวงมาลัยเป็นส่วนหนึ่งของพิธีกรรมทางศาสนาและวัฒนธรรมมาอย่างยาวนาน
              จากประสบการณ์ที่เติบโตมาในสภาพแวดล้อมเช่นนี้ เราได้เห็นดอกไม้จำนวนมากถูกทิ้งก่อนจะได้ใช้งานจริง โดยเฉพาะในฤดูฝน กลายเป็นความสูญเปล่าที่เกิดขึ้นซ้ำแล้วซ้ำเล่า
              เราจึงนำดอกไม้ที่ยังคงคุณค่ากลับมาแปรรูปและสร้างสรรค์เป็นผลิตภัณฑ์รียูส เพื่อลดขยะ เพิ่มมูลค่า และยืดอายุความงดงามของดอกไม้
              เพราะสำหรับเรา ความงดงามไม่ควรสิ้นสุดเพียงเพราะเวลา
            </p>
          </div>
        </section>
        <section id='products' className="split-section" aria-labelledby="split-section-title">
          <div className="split-text-panel">
            <h2 id="split-section-title">Flower Wrapping Paper</h2>
            <p>
              กระดาษห่อดอกไม้ที่ผสมผสานเศษกลีบดอกจริงลงในเนื้อกระดาษ
              ทำให้ทุกชิ้นมีลวดลายและสีสันที่ไม่ซ้ำกัน
              เหมาะสำหรับห่อของขวัญ จัดช่อดอกไม้ หรือตกแต่งงานพิเศษ
              สวยงามในแบบที่ธรรมชาติออกแบบให้
            </p>
          </div>

          <div className="split-image-panel frame">
            {imageErrors['split-section-image'] ? (
              <div className="image-placeholder">Split section image</div>
            ) : (
              <img
                src={productImage1}
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
                src={productImage2}
                alt="Large product visual"
                className="media-image"
                loading="lazy"
                onError={() => markImageError('split-section-image')}
              />
            )}
          </div>

          <div className="split-text-panel">
            <h2 id="split-section-title">Shoe Packaging Paper</h2>
            <p>
              กระดาษรองรองเท้าที่เปลี่ยนชั้นในกล่องธรรมดาให้กลายเป็นประสบการณ์แกะกล่องที่น่าจดจำ
              พื้นผิวนุ่ม กลิ่นอ่อนๆ จากธรรมชาติ และรายละเอียดของกลีบดอกไม้
              ช่วยยกระดับความรู้สึกของผู้รับตั้งแต่วินาทีแรกที่เปิดกล่อง
            </p>
          </div>
        </section>
        <section className="split-section" aria-labelledby="split-section-title">
          <div className="split-text-panel">
            <h2 id="split-section-title">Packaging</h2>
            <p>
              บรรจุภัณฑ์ที่เล่าเรื่องราวของแบรนด์ได้ตั้งแต่ก่อนเปิด
              ผลิตจากกระดาษดอกไม้รีไซเคิลที่สามารถปรับแต่งขนาดและลวดลายได้ตามต้องการ
              เหมาะสำหรับแบรนด์ที่ต้องการสื่อสารคุณค่าของความยั่งยืน
              ในแบบที่ลูกค้าสัมผัสได้จริง
            </p>
          </div>

          <div className="split-image-panel frame">
            {imageErrors['split-section-image'] ? (
              <div className="image-placeholder">Split section image</div>
            ) : (
              <img
                src={productImage3}
                alt="Large product visual"
                className="media-image"
                loading="lazy"
                onError={() => markImageError('split-section-image')}
              />
            )}
          </div>
        </section>

        <section id="founders" className="founders-section" aria-labelledby="founders-title">
          <div className="founders-header">
            <h2 id="founders-title">Founders</h2>
            <p>ทีมผู้ก่อตั้งที่ร่วมกันขับเคลื่อนแนวคิดการอัปไซเคิลดอกไม้สู่ผลิตภัณฑ์ที่ใช้งานได้จริง</p>
          </div>

          <div className="founders-grid">
            {founders.map((founder) => (
              <article key={founder.name} className="founder-card frame">
                <div className="founder-avatar" aria-hidden="true">
                  {founder.name.slice(-2)}
                </div>
                <h3>{founder.name}</h3>
                <p className="founder-role">{founder.role}</p>
                <p className="founder-bio">{founder.bio}</p>
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}

export default App