import React from "react";
import "./Stats.css";
import { Container } from "react-bootstrap/Container";
import { Row } from "react-bootstrap/Row";
import { Column } from "react-bootstrap/Column";
const Stats = () => {
  return (
    <Container>
      <div className="stats-container">
        <div className="stats">
          <Row>
            <Column>
              <div className="div-village">
                <h3 className="stats-no">640K</h3>
                <p className="stats-content">Villages in India</p>
              </div>
              <div className="div-unemployment">
                <h3 className="stats-no">640K</h3>
                <p className="stats-content">Villages in India</p>
              </div>
            </Column>
            <Column>
              <div className="div-village">
                <h3 className="stats-no">640K</h3>
                <p className="stats-content">Villages in India</p>
              </div>
              <div className="div-unemployment">
                <h3 className="stats-no">640K</h3>
                <p className="stats-content">Villages in India</p>
              </div>
            </Column>
          </Row>
        </div>
      </div>
    </Container>
  );
};
export default Stats;
