import React from "react";

function Dashboard(props) {
  const { user, venues } = props;

  let venueToShow;

  if (venues) {
    venueToShow = venues[0].address;
  } else {
    venueToShow = "no venue";
  }

  return (
    <div>
      <h1>{user.name ? `Welcome back ${user.name}` : null}</h1>
      <h2>{venues[0].address}</h2>
    </div>
  );
}

export default Dashboard;
