// src/AgeGate.js
import React from 'react';
import './AgeGate.css';

function AgeGate({ onConfirm }) {
  const handleExit = () => {
    window.location.href = "https://www.google.com"; 
  };

  return (
    <div style={{
      height: '100vh',
      background: '#000', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        background: '#000',
        color: '#fff',
        padding: '2em',
        maxWidth: '400px',
        width: '90%',
        borderRadius: '8px',
        textAlign: 'center',
        fontFamily: 'Arial',
        border: '1.5px solid #fff' 
      }}>
        <div style={{ textAlign: 'left', marginBottom: '10px' }}>
          <select style={{
            backgroundColor: '#222',
            color: '#fff',
            border: 'none',
            padding: '5px',
            borderRadius: '4px'
          }}>
            <option>English</option>
          </select>
        </div>
        <h1 style={{ fontSize: '1.5em' }}>
          <span style={{ fontWeight: 'bold' }}>Yupy</span>
          <span style={{
            background: '#FFA500',
            color: '#000',
            padding: '0 5px',
            borderRadius: '3px',
            marginLeft: '2px'
          }}>Net</span>
        </h1>
        <p style={{ fontSize: '1.1em', marginTop: '10px' }}><strong>This is an adult website</strong></p>
        <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
          This website contains age-restricted materials, including parodic and satirical depictions of adult-themed entertainment.
          By entering, you affirm that you are at least 18 years of age or the age of majority in the jurisdiction from which you are accessing the website, and you consent to viewing content that may include humorous or provocative material.
        </p>

        <button onClick={onConfirm} style={{
          backgroundColor: '#FFA500',
          border: 'none',
          padding: '12px',
          width: '100%',
          marginTop: '1.5em',
          fontWeight: 'bold',
          fontSize: '1em',
          cursor: 'pointer',
          borderRadius: '5px'
        }}>
          I am 18 or older - Enter
        </button>

        <button onClick={handleExit} style={{
          backgroundColor: '#444',
          color: '#fff',
          border: 'none',
          padding: '12px',
          width: '100%',
          marginTop: '0.8em',
          fontSize: '1em',
          cursor: 'pointer',
          borderRadius: '5px'
        }}>
          I am under 18 - Exit
        </button>

        <p style={{ fontSize: '0.75em', marginTop: '1.5em' }}>
          Our parental controls page explains how you can block access to this site.
        </p>

        <p style={{ fontSize: '0.7em', marginTop: '1em', color: '#888' }}>
          © YupyNet.com, 2025
        </p>
      </div>
    </div>
  );
}

export default AgeGate;
