import '../css/main.css';
import musicIcon from '../assets/images/icon-music.svg';

function PricePlan() {
  return (
    <div className="plan">
      <img src={musicIcon} alt="" />
      <div id="plan-details">
        <h2>Annual Plan</h2>
        <p>$59.99/year</p>
      </div>
      <a href="">Change</a>
    </div>
  );
}
export default function Main() {
  return (
    <main>
      <h1>Order Summary</h1>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <PricePlan />
      <button>Proceed to Payment</button>
      <a id="cancel" href="">
        Cancel Order
      </a>
    </main>
  );
}
