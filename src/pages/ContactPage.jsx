import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (formData) => {
    const response = await fetch('/api/sendEmail.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'chitalesweethome@gmail.com',
        subject: formData.subject || 'New Contact Form Submission',
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${formData.subject || 'No subject'}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
        `
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await sendEmail(formData);

      toast({
        title: 'Message Sent Successfully!',
        description: `Thank you for contacting us. We'll get back to you soon at ${formData.email}`,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: 'Error Sending Message',
        description: 'There was a problem sending your message. Please try again or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <div className="relative py-16 md:py-24 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Get in touch with our team.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-foreground/80 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name <span className="text-red-500">*</span></label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} disabled={isSubmitting} className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-500' : ''}`} />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} disabled={isSubmitting} className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : ''}`} />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} disabled={isSubmitting} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} disabled={isSubmitting} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message <span className="text-red-500">*</span></label>
                  <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} disabled={isSubmitting} className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${errors.message ? 'border-red-500' : ''}`} />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="lg:pl-12">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start"><div className="bg-primary/10 rounded-full p-3 mr-4"><MapPin className="h-6 w-6 text-primary" /></div><div><h3 className="font-semibold text-lg mb-1">Our Location</h3><p className="text-foreground/80">1306, Sadashiv Peth, Near Khunya Murlidhar Mandir, Off Perugate,<br/>Pune, MH 411030.</p></div></div>
                <div className="flex items-start"><div className="bg-primary/10 rounded-full p-3 mr-4"><Phone className="h-6 w-6 text-primary" /></div><div><h3 className="font-semibold text-lg mb-1">Phone Number</h3><p className="text-foreground/80">020 2447 2943</p></div></div>
                <div className="flex items-start"><div className="bg-primary/10 rounded-full p-3 mr-4"><Mail className="h-6 w-6 text-primary" /></div><div><h3 className="font-semibold text-lg mb-1">Email Address</h3><p className="text-foreground/80">chitalesweethome@gmail.com</p></div></div>
                <div className="flex items-start"><div className="bg-primary/10 rounded-full p-3 mr-4"><Clock className="h-6 w-6 text-primary" /></div><div><h3 className="font-semibold text-lg mb-1">Business Hours</h3><p className="text-foreground/80">Monday - Saturday:<br/>8:30 AM - 1:00 PM<br/>1:00 PM - 4:00 PM Closed<br/>4:00 PM - 9:00 PM<br/>Sunday: Closed</p></div></div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img className="w-full h-auto" alt="Store location" src="/currcshopImg.jpg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
