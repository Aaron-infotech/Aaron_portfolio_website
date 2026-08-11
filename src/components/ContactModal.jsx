import React, { useState, useEffect, useRef } from 'react';
import { X, Send, CheckCircle, MessageSquare, Loader2, ShieldCheck } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // Invisible honeypot input to trap automated spam bots
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Dynamically load Google Invisible reCAPTCHA API script if a site key is provided
  useEffect(() => {
    if (personalInfo.recaptchaSiteKey && !document.getElementById('recaptcha-v3-script')) {
      const script = document.createElement('script');
      script.id = 'recaptcha-v3-script';
      script.src = `https://www.google.com/recaptcha/api.js?render=${personalInfo.recaptchaSiteKey}`;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Silent Honeypot Trap - If hidden field is filled out, reject bot quietly
    if (formData.honeypot) {
      console.warn('Spam bot submission blocked quietly.');
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
      return;
    }

    setIsSubmitting(true);

    let recaptchaToken = 'invisible_verified';

    // 2. Invisible Google reCAPTCHA execution
    if (personalInfo.recaptchaSiteKey && window.grecaptcha) {
      try {
        recaptchaToken = await new Promise((resolve) => {
          window.grecaptcha.ready(async () => {
            const token = await window.grecaptcha.execute(personalInfo.recaptchaSiteKey, { action: 'submit_contact' });
            resolve(token);
          });
        });
      } catch (err) {
        console.warn('reCAPTCHA execution note:', err);
      }
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      submittedAt: new Date().toLocaleString(),
      recaptchaToken: recaptchaToken
    };

    try {
      if (personalInfo.googleAppsScriptUrl && !personalInfo.googleAppsScriptUrl.includes('EXAMPLE')) {
        await fetch(personalInfo.googleAppsScriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
      } else {
        console.log('Form submission payload:', payload);
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
    } catch (err) {
      console.error('Error storing data in Google Apps Script:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', honeypot: '' });
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(6px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: '2.5rem',
          maxWidth: '520px',
          width: '100%',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          border: '1px solid #e2e8f0',
          animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            color: '#64748b',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          aria-label="Close dialog"
        >
          <X size={22} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <CheckCircle size={56} style={{ color: '#7c3aed', margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.5rem', color: '#0f172a' }}>
              Thank You!
            </h3>
            <p style={{ color: '#64748b' }}>
              Your message has been sent successfully. Aaron will get back to you shortly.
            </p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#7c3aed', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                <MessageSquare size={16} />
                <span>Get In Touch</span>
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a' }}>
                Let's Talk
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                Fill out the form below or message directly on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Invisible Honeypot Field for Bot Spam Prevention */}
              <input
                type="text"
                name="website_url_hp"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#334155', marginBottom: '0.35rem' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#334155', marginBottom: '0.35rem' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#334155', marginBottom: '0.35rem' }}>
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              {/* Invisible reCAPTCHA Badge & Privacy Notice */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#94a3b8' }}>
                <ShieldCheck size={14} style={{ color: '#7c3aed' }} />
                <span>Protected by Invisible Spam & Bot Shield</span>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ flex: 1, opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Verifying & Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  WhatsApp
                </a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
