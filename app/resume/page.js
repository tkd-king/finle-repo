import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#8750F7] via-[#2A1454] to-[#8750F7] text-white p-8">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-white">Muhammad Usama</h1>
        <p className="text-lg text-center text-gray-300">Front-End Developer | React.js | Next.js | JavaScript</p>
        
        {/* Summary Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold border-b pb-2 text-white">Summary</h2>
          <p className="mt-4 text-gray-300">
            Over 3 years of experience in web application development with expertise in HTML, CSS, Tailwind CSS,
            JavaScript, React.js, and Next.js. Passionate about building responsive and high-performance web
            applications.
          </p>
        </section>
        
        {/* Skills Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold border-b pb-2 text-white">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {[
              "HTML", "CSS", "Tailwind CSS", "Material UI", "JavaScript", "React.js", "Next.js", "Node.js",
              "Git & GitHub", "Bootstrap", "Performance Optimization", "Agile & Jira"
            ].map((skill, index) => (
              <span key={index} className="bg-white/20 px-4 py-2 rounded-md text-center text-white">{skill}</span>
            ))}
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold border-b pb-2 text-white">Experience</h2>
          <div className="mt-4">
            <h3 className="text-xl font-medium text-white">Frontend Developer - GENROAR IT Services</h3>
            <p className="text-gray-300">Feb 2023 - July 2024</p>
            <p className="mt-2 text-gray-300">Developed high-performance web applications, optimized UI/UX, and collaborated with cross-functional teams.</p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-medium text-white">Frontend Developer - Tech Byts</h3>
            <p className="text-gray-300">April 2022 - Jan 2023</p>
            <p className="mt-2 text-gray-300">Built responsive web interfaces and gained hands-on experience in modern frontend technologies.</p>
          </div>
        </section>
        
        {/* Education Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold border-b pb-2 text-white">Education</h2>
          <p className="mt-4 text-gray-300">🎓 <strong>BS Software Engineering</strong> - The University of Faisalabad (2024 - Present)</p>
          <p className="mt-2 text-gray-300">🎓 <strong>Intermediate in ICS</strong> - Islamia Post Graduate College (2021 - 2023)</p>
        </section>
        
        {/* Contact Section */}
        <section className="mt-8 text-center">
          <h2 className="text-2xl font-semibold border-b pb-2 text-white">Contact</h2>
          <p className="mt-4 text-gray-300">📍 Chiniot, Pakistan</p>
          <p className="text-gray-300">📧 musama4288921@gmail.com</p>
          <p className="text-gray-300">📞 +92 316 4288 921</p>
          <a href="https://www.linkedin.com/in/muhammad-usama00" className="mt-2 block text-blue-400 hover:underline">LinkedIn Profile</a>
        </section>
      </div>
    </div>
  );
};

export default Resume;
