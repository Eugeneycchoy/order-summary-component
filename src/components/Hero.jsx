import '../css/hero.css';
import HeroImg from '../assets/images/illustration-hero.svg';
export default function Hero() {
  return (
    <section id="hero">
      <img src={HeroImg} alt="" />
    </section>
  );
}
