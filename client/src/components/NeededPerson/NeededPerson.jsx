import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const NeededPerson = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3n757zk',    // Your service ID
        'template_b3pmbvt',   // Your template ID
        form.current,
        'OWQH01wYTen1JTx4V'   // Your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🩸 Blood Requirement Form</h2>
      <form ref={form} onSubmit={sendEmail} style={styles.form}>
        <input style={styles.input} type="text" name="name" placeholder="Full Name" required />
        <input style={styles.input} type="text" name="hospital" placeholder="Hospital Name" required />
        <input style={styles.input} type="text" name="location" placeholder="Location" required />
        <input style={styles.input} type="text" name="blood_group" placeholder="Blood Group (e.g. O+)" required />
        <input style={styles.input} type="number" name="units" placeholder="Units Required" required />
        <input style={styles.input} type="tel" name="contact" placeholder="Contact Number" required />
        <textarea style={styles.textarea} name="details" placeholder="Specify Why You need Blood!!" rows="4"></textarea>
        <button style={styles.button} type="submit">🚑 Send Request</button>
        {sent && <p style={styles.success}>✅ Request Sent Successfully!</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '520px',
    margin: '3rem auto',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    background: '#fff',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#e63946',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.8rem 1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none',
  },
  textarea: {
    padding: '0.8rem 1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none',
  },
  button: {
    padding: '0.9rem 1.2rem',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#e63946',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  success: {
    color: 'green',
    marginTop: '1rem',
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

// Input focus style
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.style.borderColor = '#e63946';
      input.style.boxShadow = '0 0 4px rgba(230, 57, 70, 0.3)';
    });
    input.addEventListener('blur', () => {
      input.style.borderColor = '#ccc';
      input.style.boxShadow = 'none';
    });
  });
});

export default NeededPerson;
