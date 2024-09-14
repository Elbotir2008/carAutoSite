import { useEffect, useState } from "react";
import "./messages.scss";
import axios from "axios";
import { Car } from "../../../components/types/types";
import CardError from "../../../components/cardError/CardError";
import Badge from "@mui/material/Badge";

const Messages = () => {
  const [isSavedCards, setIsSavedCards] = useState(false);
  const [carsData, setCarsData] = useState([]);

  const fetchCarsApi = async () => {
    try {
      const res = await axios.get("http://localhost:3000/cars?_limit=4");
      const data = await res.data;
      setCarsData(data);
      setIsSavedCards(true);
    } catch (error) {
      console.log(error);
      setIsSavedCards(false);
    }
  };

  useEffect(() => {
    fetchCarsApi();
  }, []);
  console.log(carsData)
  return (
    <section className="messages-section">
      <h1>Сообщения</h1>
      {isSavedCards ? (
        <div className="messagesCards">
          {carsData.map((car: Car) => (
            <div key={car.id} className="messagesCard flex-class">
              <div className="messagesCardLeft flex-class">
                <Badge
                  color="success"
                  overlap="circular"
                  badgeContent=" "
                  variant="dot"
                >
                  <div className="profileImg">
                    <h2>
                      {car.user.name
                        ? car.user.name
                            .split(" ")
                            .map((name) => name.charAt(0))
                            .join("")
                        : null}
                    </h2>{" "}
                  </div>
                </Badge>
                <div className="profileInf">
                  <h3>{car.user.name}</h3>
                  <p>{car.message.content}</p>
                </div>
              </div>
              <div className="messagesCardRight">
                <h4>{car.message.time} AM</h4>
                <img src="/true.svg" alt="Error" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CardError />
      )}
    </section>
  );
};

export default Messages;
