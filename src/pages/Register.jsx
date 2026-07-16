import { useState } from "react";
import "../styles/Register.css";
import axios from "axios";
function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    year: "",
    category: "",
    reason: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  async function handleSubmit(event) {
  event.preventDefault();

  try {
    const response = await axios.post(
      "https://registeration-portal.onrender.com/api/register",
      formData
    );

    alert(response.data.message);

    console.log(response.data);

  } catch (error) {
    console.error(error);
    alert("Failed to submit registration.");
  }
}

  return (
    <section className="register-page">

      <div className="glass register-card">

        <h1>ATS Registration</h1>

        <p>
          Fill in your details to participate in the Annual Talent Search.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={formData.college}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            required
          />

          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          >
            <option value="">Select Year</option>
            <option>First Year</option>
            <option>Second Year</option>
            <option>Third Year</option>
          </select>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Talent Category</option>
            <option>Dance</option>
            <option>Singing</option>
            <option>Drama</option>
            <option>Photography</option>
            <option>Coding</option>
            <option>Fine Arts</option>
          </select>

          
          <button
            className="primary-btn"
            type="submit"
          >
            Register
          </button>

        </form>

      </div>

    </section>
  );
}

export default Register;