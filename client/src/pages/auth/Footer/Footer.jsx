import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current.chartInstance;
    if (chartInstance) {
      chartInstance.destroy(); // Destroy previous chart instance before re-rendering
    }
  }, []); // Empty dependency array ensures this runs only once

  // Placeholder real data (you can replace this with an API call for real data)
  const data = {
    labels: ['2019', '2020', '2021', '2022', '2023'], // Yearly data
    datasets: [
      {
        label: 'Global Blood Shortage Deaths (Yearly)',
        data: [1200, 1500, 1800, 2100, 2500], // Example yearly data (replace with real data)
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)', // Soft red color
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red shade for fill
        borderWidth: 3,
        tension: 0.4, // Smoother curve
        pointRadius: 5,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Red points
      },
    ],
  };

  // Options for customizing the chart (looks more professional)
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Global Blood Shortage - Yearly Impact on Lives',
        font: { size: 20, weight: 'bold' },
        color: '#333',
      },
      tooltip: {
        backgroundColor: '#f8f9fa',
        titleColor: '#000',
        bodyColor: '#000',
        borderColor: '#ddd',
        borderWidth: 1,
      },
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Years',
          color: '#555',
          font: { size: 14 },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Deaths due to Blood Shortage',
          color: '#555',
          font: { size: 14 },
        },
        min: 0,
        ticks: {
          stepSize: 500,
        },
      },
    },
  };

  return (
    <div
      style={{
        maxWidth: '100%', // Ensure it takes full width
        margin: 'auto',
        padding: '20px',
        height: 'auto',
      }}
    >
      <div style={{ height: '300px', position: 'relative' }}>
        <Line ref={chartRef} data={data} options={options} height={300} />
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{ fontSize: '16px', color: '#555' }}>
          Learn more about the importance of blood donations and the global blood shortage crisis:
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a
            href="https://en.wikipedia.org/wiki/Blood_donation"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '16px',
              color: '#ff6f61',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Blood Donation (Wikipedia)
          </a>
          <a
            href="https://www.who.int/news-room/fact-sheets/detail/blood-safety-and-availability"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '16px',
              color: '#ff6f61',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            WHO Blood Safety
          </a>
        </div>
      </div>

      {/* Google Map iframe */}
      <div style={{ marginTop: '20px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14230.129272370177!2d89.4522638771204!3d26.13561842543461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2ed4bd11f1993%3A0x7e2a2d3b0a8c22b5!2sDinhata%2C%20West%20Bengal%20736135%2C%20India!5e0!3m2!1sen!2sus!4v1698824982890!5m2!1sen!2sus"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ marginTop: 0 }}
        ></iframe>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer style={{ width: '100%', textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa' }}>
      <div className="footer-social-media" style={{ marginBottom: '10px' }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f" style={{ fontSize: '20px', margin: '0 10px' }}></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" style={{ fontSize: '20px', margin: '0 10px' }}></i>
        </a>
        <a href="https://www.linkedin.com/company/let-s-trys/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in" style={{ fontSize: '20px', margin: '0 10px' }}></i>
        </a>
        <a href="https://www.instagram.com/mail.letstry?utm_source=qr&igsh=MWg0NDUydm9mdHBocg==" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" style={{ fontSize: '20px', margin: '0 10px' }}></i>
        </a>
      </div>
      <p style={{ fontSize: '14px', color: '#555' }}>© 2025 Blood Support. All Rights Reserved | Terms and Conditions</p>
    </footer>
  );
};

export default MyChart;
