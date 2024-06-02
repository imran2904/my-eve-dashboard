// src/App.js
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TrafficChart from "./components/TrafficChart";
import SeverityChart from "./components/SeverityChart";
import ProtocolChart from "./components/ProtocolChart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/eve.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch JSON data");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error loading JSON data:", error);
        setError(error.message || "Failed to load JSON data");
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container fluid>
      <Row className="my-3">
        <Col>
          <h1>Network Traffic Dashboard</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div className="chart-container">
            <TrafficChart data={data} />
          </div>
        </Col>
        <Col md={6}>
          <div className="chart-container">
            <SeverityChart data={data} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="chart-container">
            <ProtocolChart data={data} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
