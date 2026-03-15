import { useEffect, useState } from 'react'
import './App.css'

const products = [
  {
    name: 'Flower wrapping paper',
    description:
      'กระดาษห่อดอกไม้จากการแปรรูปดอกไม้และเศษวัสดุธรรมชาติ เพื่อความงามที่ยั่งยืนและลดของเสีย',
    image: '/images/products/1.jpg',
  },
  {
    name: 'Shoe Packaging Paper',
    description:
      'กระดาษรองและห่อรองเท้าที่ให้สัมผัสพรีเมียม เหมาะกับแบรนด์ที่ต้องการภาพลักษณ์รักษ์โลก',
    image: '/images/products/2.jpg',
  },
  {
    name: 'Packaging',
    description:
      'โซลูชันบรรจุภัณฑ์สำหรับธุรกิจที่ต้องการใช้วัสดุรียูส สวยงาม เรียบหรู และเป็นมิตรต่อสิ่งแวดล้อม',
    image: '/images/products/3.jpg',
  },
]

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState({})

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length)
    }, 4500)

    return () => {
      window.clearInterval(timer)
    }
  }, [])

  const goToSlide = (index) => {
    setActiveIndex(index)
  }

  return (
    <main className="page">
      <header className="hero-header" id="home">
        <div className="hero-header-overlay">
          <div className="topbar">
            <p className="brand-name">Blossom Recraft Paper</p>
            <nav className="nav-menu" aria-label="Main navigation">
              <a href="#home">Home</a>
              <a href="#concept">Origin &amp; Concept</a>
              <a href="#products">Products</a>
            </nav>
          </div>

          <div className="hero-intro">
            <p className="eyebrow">Sustainable Luxury Paper</p>
            <h1>Flower Wrapping Paper Studio</h1>
            <p className="hero-subtext">
              เปลี่ยนดอกไม้และเศษวัสดุให้กลายเป็นกระดาษพรีเมียม เพื่อความงามที่ยั่งยืนในทุกการใช้งาน
            </p>
          </div>
        </div>
      </header>

      <section className="concept" id="concept" aria-labelledby="concept-title">
        <h2 id="concept-title">Origin &amp; Concept</h2>
        <p>
          ธุรกิจของเราเริ่มต้นจากความผูกพันของครอบครัวสมาชิกในทีมกับวิถีชีวิตของคนไทย
          ที่ดอกไม้และพวงมาลัยเป็นส่วนหนึ่งของพิธีกรรมทางศาสนาและวัฒนธรรมมาอย่างยาวนาน
        </p>
        <p>
          จากประสบการณ์ที่เติบโตมาในสภาพแวดล้อมเช่นนี้
          เราได้เห็นดอกไม้จำนวนมากถูกทิ้งก่อนจะได้ใช้งานจริง โดยเฉพาะในฤดูฝน
          กลายเป็นความสูญเปล่าที่เกิดขึ้นซ้ำแล้วซ้ำเล่า
        </p>
        <p>
          เราจึงนำดอกไม้ที่ยังคงคุณค่ากลับมาแปรรูปและสร้างสรรค์เป็นผลิตภัณฑ์รียูส
          เพื่อลดขยะ เพิ่มมูลค่า และยืดอายุความงดงามของดอกไม้
        </p>
        <p className="quote">เพราะสำหรับเรา ความงดงามไม่ควรสิ้นสุดเพียงเพราะเวลา</p>
      </section>

      <section className="products" id="products" aria-labelledby="products-title">
        <div className="products-head">
          <h2 id="products-title">Our Products</h2>
          <p>เลื่อนอัตโนมัติทีละรายการ เพื่อแสดงรายละเอียดสินค้าแต่ละประเภท</p>
        </div>

        <div className="carousel" role="region" aria-label="Product showcase carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {products.map((product, index) => (
              <article className="slide" key={product.name} aria-hidden={activeIndex !== index}>
                <div className="slide-image-wrap">
                  {imageErrors[product.name] ? (
                    <div className="image-placeholder">
                      <span>{product.name}</span>
                      <small>เพิ่มรูปที่โฟลเดอร์ public/images/products</small>
                    </div>
                  ) : (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="slide-image"
                      loading="lazy"
                      onError={() =>
                        setImageErrors((prev) => ({
                          ...prev,
                          [product.name]: true,
                        }))
                      }
                    />
                  )}
                </div>

                <div className="slide-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="dots" aria-label="Slide navigation">
            {products.map((product, index) => (
              <button
                key={product.name}
                type="button"
                className={`dot ${activeIndex === index ? 'dot-active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Show ${product.name}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App