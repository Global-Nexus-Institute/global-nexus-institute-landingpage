import React from "react";
import "./form-styles.css";

export default function CourseApplicationForm() {
  return (
    <div className="w-full">
      <header>
        <h1>Global Nexus Institute Training Application</h1>
      </header>
      <div className="container">
        <section className="training-info">
          <h2 style={{ textAlign: "left" }}>About the Training</h2>
          <p style={{ textAlign: "justify" }}>
            Global Nexus Institute is a leading accredited training center based
            in Kigali, Rwanda, specializing in Data Science, Artificial
            Intelligence (AI), Cybersecurity, and other emerging tech fields.
            Our mission is to provide cutting-edge, inclusive, and accessible
            education that equips learners with in-demand, practical skills,
            ensuring they are fully prepared to excel in the competitive tech
            landscape.
          </p>
          <p style={{ textAlign: "justify" }}>
            We offer a range of internationally recognized certifications and
            hands-on training, all designed to meet the demands of today&apos;s
            job market. Whether you&apos;re looking to kickstart your tech
            career or enhance your existing skills, our expert-led programs are
            tailored to deliver real-world value.
          </p>
          <p>
            <strong>Next Session:</strong> November 2024
          </p>
          <p>
            <strong>Location:</strong> Kigali, Rwanda & Online
          </p>
          <p>
            <strong>Program Duration:</strong> 2 Months
          </p>
          <p>
            <strong>Fees:</strong> 150,000 RWF
          </p>
          <p>
            <strong>Scholarship Opportunities:</strong> Partial scholarships are
            available for eligible applicants.
          </p>
          <p>
            Join us to become part of a dynamic community focused on innovation,
            technology, and personal growth.
          </p>
        </section>
        <section className="apply-form">
          <h2>Apply Now</h2>
          <form action="submit_application.php" method="post">
            <label htmlFor="full-name">Full Name:</label>
            <input type="text" id="full-name" name="full-name" required />

            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="country">Country:</label>
            <input type="text" id="country" name="country" required />

            <label htmlFor="education-level">Education Level:</label>
            <select id="education-level" name="education-level" required>
              <option value="high-school">High School</option>
              <option value="bachelor">Bachelor&apos;s Degree</option>
              <option value="master">Master&apos;s Degree</option>
              <option value="phd">PhD</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="proof-of-payment">Proof of Payment:</label>
            <input
              type="file"
              id="proof-of-payment"
              name="proof-of-payment"
              accept=".pdf,.jpg,.png"
              required
            />
            <p>Please make your payment to the following account:</p>
            <p>
              <strong>MoMopay:</strong> 030700 (Global Nexus Institute Ltd)
            </p>
            <p>
              <strong>Contact:</strong> +250787406140, For support or inquiries
            </p>

            <label htmlFor="diploma">Attach Diploma (if applicable):</label>
            <input
              type="file"
              id="diploma"
              name="diploma"
              accept=".pdf,.jpg,.png"
            />

            <label htmlFor="program">Select Program:</label>
            <select id="program" name="program" required>
              <option value="data-science-intermediate">
                Data Science: Intermediate
              </option>
              <option value="data-analytics">Data Analytics</option>
              <option value="data-analytics-excel">
                Data Analytics with Excel for Professionals
              </option>
              <option value="computer-basics">Computer Basics</option>
              <option value="sql-analysis">SQL for Data Analysis</option>
              <option value="python-basics">
                Basic Python for Data Science
              </option>
              <option value="ai">Artificial Intelligence</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="message">
              Why are you interested in this program?
            </label>
            <textarea id="message" name="message" rows={4} required></textarea>

            <label>
              <input type="checkbox" id="agree" name="agree" required />I agree
              that my information will be used to update me about training and
              opportunities.
            </label>

            <button type="submit">Submit Application</button>
          </form>
        </section>
      </div>
      <div className=".apply-footer">
        &copy; 2024 Global Nexus Institute |{" "}
        <a href="mailto:info@globalnexus.co.rw" style={{ color: " #fff" }}>
          Contact Us
        </a>{" "}
        | Call: +250 787 406 140
      </div>
    </div>
  );
}
