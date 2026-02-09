function Products() {





  function applyFilters() {return};

  function clearFilters() {return};



  return(

    <>
        <div className="page-name">
        <h1>Products</h1>
        <p>Explore our extensive collection of games available for purchase.</p>
      </div>
      <div className="products-page-wrapper">
        <aside className="filter-bar">
          <h2>Filter by</h2>
          <label htmlFor="category">Category:</label>
          <input type="text" id="searchInput" placeholder="Search..."/>

          <label htmlFor="platformSelect" className="">Platform:</label>
          <select name="platformSelect" id="platformSelect">
            <option value="">All Platforms</option>
            <option value="">Play Station</option>
            <option value="">X-Box</option>
            <option value="">PC</option>
            <option value="">Nintendo</option>
          </select>

          <label htmlFor="ageSelect"> Age Rating</label>
          <select name="platformSelect" id="platformSelect">
            <option value="">All Ratings</option>
            <option value="">PG 12</option>
            <option value="">PG 16</option>
            <option value="">PG 18</option>
          </select>

          <button>Apply Filters</button>
          <button>Clear Filters</button>

        </aside>
      </div>
    
    </>
  )
}

export default Products;