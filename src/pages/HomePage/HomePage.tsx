import Feed from "../../components/Feed/Feed";
import Hero from "../../components/Hero/Hero";
import Hot from "../../components/Hot/Hot";
import Invite from "../../components/Invite/Invite";
import Reviews from "../../components/Reviews/Reviews";

const HomePage = () => (
  <>
    <Hero />
    <Invite />
    <Hot />
    <Feed />
    <Reviews />
  </>
);

export default HomePage;
