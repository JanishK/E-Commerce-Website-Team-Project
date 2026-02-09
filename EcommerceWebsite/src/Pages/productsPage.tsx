import { useRef , useState, useEffect, useMemo} from "react";
import { supabase } from '../supabaseClient';

function Products() {

  const [games, setGames] = useState([]);
  const [loading, setloading] = useState(true);

  //filters for the page 

  const [platformFilter, setPlatformFilter] = useState("");
  const [ageRatingFilter, setAgeRatingFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");


  function applyFilters() {return};

  function clearFilters() {return};
  const didFetch = useRef(false);
  
const filteredGames = useMemo(() => {
  const s = searchQuery.trim().toLowerCase();

  return games.filter((g) => {
    // search
    const searchOk =
      !s ||
      g.title?.toLowerCase().includes(s) ||
      g.description?.toLowerCase().includes(s);

    // age
    const ageLabel = g.age_ratings?.label ?? "";
    const ageOk = ageRatingFilter === "ALL" ? true : ageLabel === ageRatingFilter;

    // platforms
    const platformNames =
      (g.game_platforms ?? [])
        .map((gp: any) => gp.platforms?.name)
        .filter(Boolean);

    const platformOk =
      platform === "ALL" ? true : platformNames.includes(platform);

    // price (use minimum price across platforms)
    const prices =
      (g.game_prices ?? [])
        .map((p: any) => Number(p.price))
        .filter((n: number) => !Number.isNaN(n));

    const minPrice = prices.length ? Math.min(...prices) : Infinity;
    const priceOk = maxPrice === "" ? true : minPrice <= Number(maxPrice);

    return searchOk && ageOk && platformOk && priceOk;
  });
}, [games, search, platform, age, maxPrice]);

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;
  
    const fetchGamesTrending = async () => {
      const { data, error } = await supabase
        .from("games")
        .select(`
          game_id,
          title,
          description,
          age_ratings:age_rating_id (label),
          game_images ( image_url, is_cover ),
          game_platforms (platforms( name )),
          game_prices ( price , platform_id)
        `)
        .order("game_id", { ascending: false });

      if (error) console.error(error);
      else setGames(data ?? []);
    };
  
    fetchGamesTrending();
  }, []);
  



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