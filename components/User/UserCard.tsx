import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import api from "./api";
import { useUser } from "./context";

const UserCard = () => {
  const [pointsToAdd, setPointsToAdd] = useState(0);
  const { user, error, handleAddPoints } = useUser();

  const validPoints = [1000, 5000, 7500];

  const handleAddPointsClick = async () => {
    if (validPoints.includes(pointsToAdd)) {
      const response = await handleAddPoints(pointsToAdd);

      if (response) {
        toast.success("Points added");
      } else {
        toast.error("error");
      }

      setPointsToAdd(0);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#252F3D",
        color: "white",
        borderRadius: "10px",
        padding: "20px 0",
      }}
    >
      <p style={{ padding: "0 10px" }}>Add Balance</p>
      {error ? <h1>Error loading user data</h1> : <span>{user?.points}</span>}
      <hr />
      <Toaster />
      <Container style={{ padding: "10px" }}>
        <p>Aerocard</p>
        <p>Jhon Kite</p>
        <p>07/23</p>
        <Grid container spacing={4}>
          {validPoints.map((item, i) => {
            return (
              <Grid item xs={12} sm={6} lg={3} xl={3} key={i}>
                <button
                  style={{
                    backgroundColor: "lightgrey",
                    borderRadius: "5px",
                    color: "blue",
                    cursor: "pointer",
                    fontSize: "16px",
                    padding: "8px",
                  }}
                  onClick={() => {
                    setPointsToAdd(item);
                  }}
                >
                  {item}
                </button>
              </Grid>
            );
          })}
        </Grid>
        <br />
        {validPoints.includes(pointsToAdd) ? (
          <button className="btn-grad" onClick={handleAddPointsClick}>
            Add {pointsToAdd} Points
          </button>
        ) : (
          <button
            className="btn-grad"
            onClick={handleAddPointsClick}
            style={{ cursor: "not-allowed" }}
          >
            Select an amount
          </button>
        )}
      </Container>
    </div>
  );
};

export default UserCard;
