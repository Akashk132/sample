import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/* ==================================================
   🎨 STYLES
   ================================================== */
const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  title: {
    color: "#2c3e50",
    marginBottom: "25px",
    fontSize: "28px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  select: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
  },
  button: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "12px 30px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginRight: "10px",
  },
  buttonSecondary: {
    backgroundColor: "#2ecc71",
    color: "white",
    padding: "12px 30px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  radioGroup: {
    marginBottom: "15px",
    padding: "10px 0",
  },
  label: {
    fontWeight: "bold",
    marginRight: "15px",
    color: "#34495e",
  },
  radioLabel: {
    marginRight: "20px",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    backgroundColor: "white",
  },
  th: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "12px",
    textAlign: "left",
    fontWeight: "bold",
  },
  td: {
    padding: "10px 12px",
    borderBottom: "1px solid #ddd",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    color: "white",
    padding: "6px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  },
  link: {
    textDecoration: "none",
  },
};

/* ==================================================
   🔧 LAB CONFIG (EDIT ONLY THIS SECTION)
   ================================================== */

const APP_TITLE = "Hospital Room Booking System";

// ----- BASIC FIELDS -----
const ENABLE_NAME = true;
const ENABLE_SURNAME = true;
const ENABLE_ADDRESS = true;
const ENABLE_PHONE = true;
const ENABLE_REGNO = true;
const ENABLE_GENDER = true;
const ENABLE_VALUE = true;

// ----- EXTRA FLEXIBLE FIELDS -----
const ENABLE_TRUE_FALSE = true;   // AC Required
const ENABLE_YES_NO = true;       // Payment Done
const ENABLE_CHECKBOX = true;     // Services
const ENABLE_DROPDOWN = true;     // Room Type

/* ==================================================
   🏠 HOME PAGE
   ================================================== */
function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome to {APP_TITLE}</h2>
        <div style={{ textAlign: "center" }}>
          <Link to="/main" style={styles.link}>
            <button style={styles.button}>Go to Application</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ==================================================
   📋 MAIN PAGE (FORM)
   ================================================== */
function Main({ records, setRecords }) {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    address: "",
    phone: "",
    regno: "",
    gender: "",
    value: "",
    trueFalse: "",
    yesNo: "",
    services: [],
    dropdown: "",
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "services") {
      setForm({
        ...form,
        services: checked
          ? [...form.services, value]
          : form.services.filter((v) => v !== value),
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecords([...records, form]);
    setForm({
      name: "",
      surname: "",
      address: "",
      phone: "",
      regno: "",
      gender: "",
      value: "",
      trueFalse: "",
      yesNo: "",
      services: [],
      dropdown: "",
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>{APP_TITLE}</h2>

        <form onSubmit={handleSubmit}>
          {ENABLE_NAME && <input style={styles.input} name="name" placeholder="Name" value={form.name} onChange={handleChange} />}
          {ENABLE_SURNAME && <input style={styles.input} name="surname" placeholder="Surname" value={form.surname} onChange={handleChange} />}
          {ENABLE_ADDRESS && <input style={styles.input} name="address" placeholder="Address" value={form.address} onChange={handleChange} />}
          {ENABLE_PHONE && <input style={styles.input} name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />}
          {ENABLE_REGNO && <input style={styles.input} name="regno" placeholder="Reg No / Room No" value={form.regno} onChange={handleChange} />}

          {ENABLE_GENDER && <div style={styles.radioGroup}>
            <span style={styles.label}>Gender:</span>
            <label style={styles.radioLabel}><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
            <label style={styles.radioLabel}><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
          </div>}

          {ENABLE_VALUE && <input style={styles.input} name="value" placeholder="Fees / Amount" value={form.value} onChange={handleChange} />}

          {ENABLE_TRUE_FALSE && <div style={styles.radioGroup}>
            <span style={styles.label}>AC Required:</span>
            <label style={styles.radioLabel}><input type="radio" name="trueFalse" value="Yes" onChange={handleChange} /> Yes</label>
            <label style={styles.radioLabel}><input type="radio" name="trueFalse" value="No" onChange={handleChange} /> No</label>
          </div>}

          {ENABLE_YES_NO && <div style={styles.radioGroup}>
            <span style={styles.label}>Payment Done:</span>
            <label style={styles.radioLabel}><input type="radio" name="yesNo" value="Yes" onChange={handleChange} /> Yes</label>
            <label style={styles.radioLabel}><input type="radio" name="yesNo" value="No" onChange={handleChange} /> No</label>
          </div>}

          {ENABLE_CHECKBOX && <div style={styles.radioGroup}>
            <span style={styles.label}>Services:</span>
            <label style={styles.radioLabel}><input type="checkbox" name="services" value="WiFi" onChange={handleChange} /> WiFi</label>
            <label style={styles.radioLabel}><input type="checkbox" name="services" value="Food" onChange={handleChange} /> Food</label>
            <label style={styles.radioLabel}><input type="checkbox" name="services" value="Cleaning" onChange={handleChange} /> Cleaning</label>
          </div>}

          {ENABLE_DROPDOWN && <div style={{ marginBottom: "20px" }}>
            <span style={styles.label}>Room Type:</span><br />
            <select style={styles.select} name="dropdown" onChange={handleChange}>
              <option value="">Select</option>
              <option value="General">General</option>
              <option value="AC">AC</option>
              <option value="Deluxe">Deluxe</option>
            </select>
          </div>}

          <div style={{ textAlign: "center", marginTop: "25px" }}>
            <button style={styles.button} type="submit">Add Record</button>
            <Link to="/results" style={styles.link}>
              <button style={styles.buttonSecondary} type="button">View Records</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ==================================================
   📊 RESULTS PAGE
   ================================================== */
function Results({ records }) {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>All Records</h2>
        <p style={{ textAlign: "center", fontSize: "18px", color: "#7f8c8d" }}>
          <strong>Total Records: {records.length}</strong>
        </p>

        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                {ENABLE_NAME && <th style={styles.th}>Name</th>}
                {ENABLE_SURNAME && <th style={styles.th}>Surname</th>}
                {ENABLE_ADDRESS && <th style={styles.th}>Address</th>}
                {ENABLE_PHONE && <th style={styles.th}>Phone</th>}
                {ENABLE_REGNO && <th style={styles.th}>Reg No</th>}
                {ENABLE_GENDER && <th style={styles.th}>Gender</th>}
                {ENABLE_VALUE && <th style={styles.th}>Value</th>}
                {ENABLE_TRUE_FALSE && <th style={styles.th}>AC</th>}
                {ENABLE_YES_NO && <th style={styles.th}>Paid</th>}
                {ENABLE_CHECKBOX && <th style={styles.th}>Services</th>}
                {ENABLE_DROPDOWN && <th style={styles.th}>Type</th>}
              </tr>
            </thead>
            <tbody>
              {records.map((r, i) => (
                <tr key={i}>
                  {ENABLE_NAME && <td style={styles.td}>{r.name}</td>}
                  {ENABLE_SURNAME && <td style={styles.td}>{r.surname}</td>}
                  {ENABLE_ADDRESS && <td style={styles.td}>{r.address}</td>}
                  {ENABLE_PHONE && <td style={styles.td}>{r.phone}</td>}
                  {ENABLE_REGNO && <td style={styles.td}>{r.regno}</td>}
                  {ENABLE_GENDER && <td style={styles.td}>{r.gender}</td>}
                  {ENABLE_VALUE && <td style={styles.td}>{r.value}</td>}
                  {ENABLE_TRUE_FALSE && <td style={styles.td}>{r.trueFalse}</td>}
                  {ENABLE_YES_NO && <td style={styles.td}>{r.yesNo}</td>}
                  {ENABLE_CHECKBOX && <td style={styles.td}>{r.services.join(", ")}</td>}
                  {ENABLE_DROPDOWN && <td style={styles.td}>{r.dropdown}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: "center", marginTop: "25px" }}>
          <Link to="/main" style={styles.link}>
            <button style={styles.button}>Back to Form</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ==================================================
   🚦 ROUTER
   ================================================== */
export default function App() {
  const [records, setRecords] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main records={records} setRecords={setRecords} />} />
        <Route path="/results" element={<Results records={records} />} />
      </Routes>
    </BrowserRouter>
  );
}