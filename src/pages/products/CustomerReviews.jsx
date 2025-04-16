import './CustomerReviews.css'

export default function CustomerReviews() {
  const reviews = [
    {
      name: 'Hoang Dung.',
      text: 'I tried the dragon fruit and it was absolutely phenomenal! The freshness and taste were like nothing I’ve ever had before. Highly recommend!',
    },
    {
      name: 'Truong Thuy.',
      text: 'The service was amazing and the fruits were fresh and tasty!',
    },
    {
      name: 'Kim Hanh.',
      text: 'Loved the packaging and quick delivery. Will buy again!',
    },
  ];

  return (
    <section className="customer-reviews-us" style={{marginTop:'-200px'}}>
      <h2>What Our Customers Say</h2>
      <div className="review-list-scroll">
        {reviews.map((review, index) => (
          <div className="review-us" key={index}>
            <img src="/Images/user-avatar.jpg" alt="User" />
            <div>
              <p className="reviewer-us-name">{review.name}</p>
              <p className="review-us-text">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
