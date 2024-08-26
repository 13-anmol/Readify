import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl px-4 py-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to our Book Store! We are passionate about bringing the joy of reading to people of all ages and backgrounds. Our collection features a wide range of genres, from classics to contemporary bestsellers, ensuring there's something for everyone to enjoy.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          At our store, we believe in fostering a love for literature and creating a welcoming space for book enthusiasts to explore new worlds through the pages of a book. Whether you're searching for a thrilling mystery, an inspiring biography, or a heartwarming romance, you'll find it here.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our dedicated team is committed to providing exceptional customer service and helping you discover your next favorite read. Feel free to reach out to us with any questions or recommendations – we'd love to hear from you!
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Thank you for choosing our Book Store. Happy reading!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
