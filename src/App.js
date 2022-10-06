import "./App.css";
import { useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";

const App = () => {
  const [companies, setCompanies] = useState([]);

  const GetCompanies = () => {
    const url = "mock";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: "",
    })
      .then((Response) => Response.json())
      .then((json) => {
        setCompanies(json.companies);
      })
      .catch((e) => {
        console.log("e", e);
      });
  };
  

  useEffect(() => {
    GetCompanies();
     // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <h1>Companies List</h1>
      <div className="col-md-6 py-3 mx-auto">
      <table className="table table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {companies === [] ?  companies.map((val, ind) => (
            <>
              <tr key={ind} className="company-list">
                <td className="company-name">{val.name}</td>
                <td className="company-email">{val.email}</td>
                <td className="company-status">
                  <button className="btn btn-outline-secondary">
                    <GoPrimitiveDot
                      className={val.status === "active" ? "green" : ""}
                    />
                    <span>{val.status}</span>
                  </button>
                </td>
              </tr>
            </>
          )): <tr><td colSpan="3">No data Found</td>
          </tr>
          } 
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
