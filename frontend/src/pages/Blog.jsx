import React, { useState } from "react";
import img1 from "../assets/second.jpeg";
import img2 from "../assets/third.jpeg";
import img3 from "../assets/fourth.jpeg";
import img4 from "../assets/top.jpeg";

const Blog = () => {
  const [expanded, setExpanded] = useState({
    article1: false,
    article2: false,
    article3: false,
  });

  const toggleExpand = (article) => {
    setExpanded((prevState) => ({
      ...prevState,
      [article]: !prevState[article],
    }));
  };

  return (
    <div className="bg-white text-black w-full">
      {/* Header Section */}
      <div className="w-[1300px] mx-auto">

      
      <header className="py-6 px-8 flex justify-between items-center bg-gray-800 shadow-md">
        <h1 className="text-4xl font-bold text-green-400 hover:text-green-300 transition duration-300">
          AI Stock Insights
        </h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#" className="hover:text-green-300">Home</a></li>
            <li><a href="#" className="hover:text-green-300">Articles</a></li>
            <li><a href="#" className="hover:text-green-300">AI Analysis</a></li>
            <li><a href="#" className="hover:text-green-300">Subscribe</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-8 bg-gray-700">
        <h2 className="text-8xl font-semibold mb-4">BLOG</h2>
      </section>

      {/* AI Analysis Section with Bigger Image & Expanded News */}
      <section className="py-12 px-8 bg-gray-800 flex flex-col">
        <img src={img4} alt="Stock Predictions" className="mt-2 mb-6 rounded-md mx-auto w-[1200px] h-[680px]" />

          <h4 className="text-4xl max-w-3xl font-semibold text-green-300 mb-3 ml-[15px]">
            CROSS MARGIN TRADING JUST LANDED:HERE'S WHY IT MATTER
          </h4>
          
      </section>

      {/* Featured Articles */}
      <section className="py-12 mx-auto px-8 text-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Article 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold hover:text-green-300 transition duration-300">AI Predicts Market Trends</h4>
            <img src={img1} alt="Market Trends" className="mt-2 mb-4 rounded" />
            <p className="text-gray-400">AI analysis shows market trends shifting towards bullish patterns.</p>
            {expanded.article1 && (
              <p className="text-gray-400 mt-3">
                The latest AI models are predicting an upward surge in stock markets, particularly in the technology sector. With 
                companies investing in machine learning, stock forecasting accuracy has improved, making investment strategies 
                more reliable. Experts believe this could lead to a 5% increase in major indices over the next quarter.
              </p>
            )}
            <button 
              onClick={() => toggleExpand("article1")}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 transition duration-300">
              {expanded.article1 ? "Show Less" : "Read More"}
            </button>
          </div>

          {/* Article 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold hover:text-green-300 transition duration-300">Stock Volatility Analysis</h4>
            <img src={img2} alt="Stock Analysis" className="mt-2 mb-4 rounded" />
            <p className="text-gray-400">AI-driven risk models predict high volatility in the coming months.</p>
            {expanded.article2 && (
              <p className="text-gray-400 mt-3">
                AI-based risk assessment tools are analyzing market data to detect volatility patterns. High-frequency trading 
                and algorithmic strategies are expected to amplify price swings, making it crucial for investors to stay updated 
                with real-time analytics. Financial analysts suggest using AI-backed models to mitigate potential risks.
              </p>
            )}
            <button 
              onClick={() => toggleExpand("article2")}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 transition duration-300">
              {expanded.article2 ? "Show Less" : "Read More"}
            </button>
          </div>

          {/* Article 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold hover:text-green-300 transition duration-300">AI & Algorithmic Trading</h4>
            <img src={img3} alt="AI Trading" className="mt-2 mb-4 rounded" />
            <p className="text-gray-400">Learn how AI is revolutionizing trading strategies with automation.</p>
            {expanded.article3 && (
              <p className="text-gray-400 mt-3">
                Algorithmic trading powered by AI is becoming the future of stock market investments. AI models now analyze 
                real-time market data and execute trades within milliseconds, optimizing profits. As regulatory bodies adapt to 
                AI's growing role, trading firms are exploring more advanced machine learning techniques.
              </p>
            )}
            <button 
              onClick={() => toggleExpand("article3")}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 transition duration-300">
              {expanded.article3 ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-12 px-8 text-center bg-gray-700">
        <h3 className="text-3xl font-bold mb-4 hover:text-green-300 transition duration-300">Subscribe for AI Market Updates</h3>
        <p className="text-gray-400 mb-4">
          Join our newsletter to receive the latest insights directly to your inbox.
        </p>
        <input
          type="email"
          placeholder="Enter your email..."
          className="p-2 rounded bg-gray-800 text-white"
        />
        <button className="ml-2 bg-green-600 px-4 py-2 rounded hover:bg-green-500 transition duration-300">
          Subscribe
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 px-8 text-center bg-gray-800">
        <p>© 2025 Zelbi  All rights reserved.</p>
      </footer>


      </div>
    </div>
  );
};

export default Blog;