import React, { useState } from "react";
import { useUser } from "../User/context";
import UserCard from "../User/UserCard";

const Aerocoins = () => {
  const { user, error, isLoading } = useUser();
  const [cardIsOpen, setCardIsOpen] = useState<boolean>(false);

  const handleCardOpen = () => {
    setCardIsOpen((currentStatus) => !currentStatus);
  };

  return (
    <div>
      <p>{error || isLoading ? "loading user" : user?.points} </p>

      <button onClick={handleCardOpen}>
        {cardIsOpen ? <p>Close</p> : <p>Open</p>}
      </button>

      {cardIsOpen && <UserCard />}
    </div>
  );
};

export default Aerocoins;
