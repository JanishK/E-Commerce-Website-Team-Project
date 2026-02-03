import Footer from "../Components/footer";





function Home() {
  return (
    <>
      <div className="">
        <section className="hero-banner">
          <div className="hero-content">
            <h1>Welcome to Our E-Commerce Website</h1>
            <p>Discover the best products at unbeatable prices.</p>
            <button className="hero-btn">Shop Now</button>
          </div>
        </section>

        <section className="categories-section">
          <h2 className="section-title">Categories</h2>
          <div className="categories-container">
            <button className="category-card">Action</button>
            <button className="category-card">Adventure</button>
            <button className="category-card">RPG</button>
            <button className="category-card">Racing</button>
            <button className="category-card">Action</button>
            <button className="category-card">Action</button>

          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
