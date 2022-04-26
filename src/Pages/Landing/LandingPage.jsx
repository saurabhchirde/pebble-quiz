import { Button, CategoryCard, NavBarBottom, NavBarTop } from "Components";
import { NavBar } from "Components/UI/Navigation";
import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <>
      <div className="landing-page-body">
        <NavBar />
        <NavBarBottom />
        <NavBarTop />
        <div className="landing-page-content">
          <div className="landing-page-header">
            <h1>Welcome, Saurabh</h1>
            <div className="flex-row login-btn-desktop">
              <Button label="Login" btnClassName="btn primary-outline-btn-md" />
              <Button label="Start Quiz" btnClassName="btn primary-btn-md" />
            </div>
          </div>
          <div className="landing-page-popular">
            <h2>Popular</h2>
            <div>
              <CategoryCard
                cardSize="card-square"
                category="Avengers"
                time="3 min"
                img="https://images.unsplash.com/photo-1561149877-84d268ba65b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
              />
              <CategoryCard
                cardSize="card-square"
                category="Animals"
                time="4 min"
                img="https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>
          </div>
          <div className="landing-page-top-categories">
            <h2>Top Categories</h2>
            <div>
              <CategoryCard
                cardSize="card-small"
                category="Movies"
                img="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <CategoryCard
                cardSize="card-small"
                category="Travel"
                img="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <CategoryCard
                cardSize="card-small"
                category="Technology"
                img="https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
