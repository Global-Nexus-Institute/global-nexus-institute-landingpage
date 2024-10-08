import React from "react";
import "./form-styles.css";
import TopMenu from "../navigation/TopMenu";

export default function JobApplicationForm() {
  return (
    <div className="w-full">
      
      <header>
        <h1>Global Nexus Institute Job Application</h1>
      </header>

      <div className="container">
        <section className="job-info">
          <h2 style={{ textAlign: "left" }}>About the Positions</h2>
          <p style={{ textAlign: "justify" }}>
            Global Nexus Institute is seeking qualified candidates for various
            instructional and support roles within our innovative team. We are
            dedicated to providing high-quality training in Data Science,
            Artificial Intelligence (AI), Cybersecurity, and more. Join us in
            empowering the next generation of tech professionals.
          </p>
          <p style={{ textAlign: "justify" }}>Available Positions:</p>
          <ul>
            <li>Basics Computer Instructor</li>
            <li>Data Science Instructor</li>
            <li>Cyber-Security Instructor</li>
            <li>Artificial Intelligence Instructor</li>
            <li>Advanced Data Science Instructor</li>
            <li>Expert Data Science Instructor</li>
            <li>Marketing Officer</li>
            <li>Students Recruitment</li>
            <li>Students Support</li>
            <li>Other (Describe)</li>
          </ul>
          <p>
            <strong>Location:</strong> Remote (Online)
          </p>
          <p>
            <strong>Application Deadline:</strong> Please submit your
            application by September 32, 2024.
          </p>
        </section>

        <section className="apply-form">
          <h2>Apply Now</h2>
          <form
            action="submit_job_application.php"
            method="post"
            encType="multipart/form-data"
          >
            <label htmlFor="full-name">Full Name:</label>
            <input type="text" id="full-name" name="full-name" required />

            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="country">Country:</label>
            <input type="text" id="country" name="country" required />

            <label htmlFor="position">Position Applied For:</label>
            <select id="position" name="position" required>
              <option value="basics-computer-instructor">
                Basics Computer Instructor
              </option>
              <option value="basics-computer-instructor">
                Data Science Instructor
              </option>
              <option value="cyber-security-instructor">
                Cyber-Security Instructor
              </option>
              <option value="ai-instructor">
                Artificial Intelligence Instructor
              </option>
              <option value="advanced-data-science-instructor">
                Advanced Data Science Instructor
              </option>
              <option value="expert-data-science-instructor">
                Expert Data Science Instructor
              </option>
              <option value="marketing-officer">Marketing Officer</option>
              <option value="students-recruitment">Students Recruitment</option>
              <option value="students-support">Students Support</option>
              <option value="students-support">
                Other Describe it under Why are you interested in this position?
              </option>
            </select>

            <label htmlFor="cover-letter">Attach Cover Letter:</label>
            <input
              type="file"
              id="cover-letter"
              name="cover-letter"
              accept=".pdf,.doc,.docx"
              required
            />

            <label htmlFor="degree">Attach Degree:</label>
            <input
              type="file"
              id="degree"
              name="degree"
              accept=".pdf,.doc,.docx"
              required
            />

            <label htmlFor="message">
              Why are you interested in this position?
            </label>
            <textarea id="message" name="message" rows={4} required></textarea>

            <label>
              <input type="checkbox" id="agree" name="agree" required />I agree
              that my information will be used for the job application process.
            </label>

            <button type="submit">Submit Application</button>
          </form>
        </section>
      </div>
    </div>
  );
}
