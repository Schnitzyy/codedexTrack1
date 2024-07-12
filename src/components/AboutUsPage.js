import React from 'react';
import '../styles/AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <h1>About Us</h1>
      <p>
        Welcome to our coffee shop! We are dedicated to providing the best coffee experience with a focus on quality, sustainability, and community. Our mission is to create a welcoming space for everyone to enjoy.
      </p>
      <p>
        <strong>Our Story:</strong>
        <br />
        Our journey began in 2010 when we opened our first shop in the heart of the city. Over the years, we've grown and evolved, always staying true to our core values of quality and community.
      </p>
      <p>
        <strong>Our Coffee:</strong>
        <br />
        We source our beans from the finest growers around the world, ensuring that each cup of coffee is crafted with care and precision. Our baristas are trained to deliver the perfect brew every time.
      </p>
      <img src="path/to/your/image1.jpg" alt="Our Coffee Shop" />
      <img src="path/to/your/image2.jpg" alt="Coffee Beans" />
    </div>
  );
};

export default AboutUsPage;
