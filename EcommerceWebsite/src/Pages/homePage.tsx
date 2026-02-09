import { useState, useEffect , useRef} from "react";
import { supabase } from '../supabaseClient';


import Footer from "../Components/footer";


import GamesTrendingCard from "../Components/gamesTrending";
import DealsOfTheWeek from "../Components/dealsoftheweek";




function Home() {

  const [gamesTrending, setGamesTrending] = useState([]);
  const [dealsOfTheWeek, setDealsOfTheWeek] = useState([]);
  

const didFetch = useRef(false);

useEffect(() => {
  if (didFetch.current) return;
  didFetch.current = true;

  const fetchGamesTrending = async () => {
    const { data, error } = await supabase
      .from("trending_games")
      .select(`
        trend_id,
        rank,
        score,
        games:game_id (
          game_id,
          title,
          description,
          game_images ( image_url, is_cover ),
          game_prices ( price )
        )
      `)
      .order("rank", { ascending: true });

    if (error) console.error(error);
    else setGamesTrending(data ?? []);
  };

  fetchGamesTrending();
}, []);

console.log(gamesTrending);
useEffect(() => {
  const fetchDeals = async () => {
    const { data, error } = await supabase
      .from("deal_items")
      .select(`
        deal_item_id,
        old_price,
        new_price,
        discount_type,
        discount_value,
        games:game_id (
          game_id,
          title,
          game_images ( image_url, is_cover ),
          game_prices ( price )
        )
      `);

    if (error) console.error("Deals error:", error);
    else setDealsOfTheWeek(data ?? []);
  };

  fetchDeals();
}, []);





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
        <h2 className="section-title">Categories</h2>
        <section className="categories-section">
          <div className="categories-container">
            <button className="category-card">Action</button>
            <button className="category-card">Adventure</button>
            <button className="category-card">RPG</button>
            <button className="category-card">Racing</button>
            <button className="category-card">Action</button>
            <button className="category-card">Action</button>

          </div>
        </section>
        
        <h2 className="section-title">Games Trending</h2>

        <section className="trending-section">
            {gamesTrending.map((item: any) => (
              <GamesTrendingCard 
                key={item.trend_id}
                rank={item.rank}
                title={item.games.title}
                image={item.games.game_images.find((img: any) => img.is_cover)?.image_url || ''}
                price={item.games.game_prices[0]?.price || 0}
              />
            ))}

        </section>
        <h2 className="section-title">Deals of the Week</h2>

        <section className="deals-section">
            {dealsOfTheWeek.map((deal: any) => (
              <DealsOfTheWeek 
                key={deal.deal_item_id}
                title={deal.games.title}
                image={deal.games.game_images.find((img: any) => img.is_cover)?.image_url || ''}
                oldPrice={deal.old_price}
                newPrice={deal.new_price}
              />
            ))}
        </section>



      </div>
      <Footer/>
    </>
  );
}

export default Home;
