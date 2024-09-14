import { Link, useNavigate, useLocation } from "react-router-dom";
import "./aside.scss";
import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  tariff: string;
}

const Aside: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // JSON serverdan faqat birinchi avtomobil ma'lumotlarini olish
        const response = await fetch("http://localhost:3000/cars/1");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUser(data.user); // Faonly `user` ma'lumotlarini olish
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (location.pathname === "/personalAccount") {
      navigate("/personalAccount/savedCards");
    }
  }, [location, navigate]);

  if (!user) {
    return <div>Loading...</div>; // Loading holati uchun
  }

  // User name'ni bosh harflari olish
  const getInitials = (name: string) => {
    const names = name?.split(" ");
    const initials = names?.map(name => name.charAt(0)).join("");
    return initials?.toUpperCase();
  };

  return (
    <aside className="personalAccountAside">
      <div className="asideProfileInf flex-class">
        <div className="profileImg">
          <h1>{getInitials(user.name)}</h1>
        </div>
        <div className="profileTexts">
          <h1>{user.name}</h1>
          <h3>Рейтинг 5.0</h3>
        </div>
      </div>
      <div className="asideProfileLinks">
        <ul>
          <li>
            E-mail
            <a href={`mailto:${user.email}`}>
              {user.email}
            </a>
          </li>
          <li className="flex-class">
            Тариф
            <div className="asideTarif">
              <a href="#">
                {" "}
                <img src="/i.svg" alt="Error" />
                {user.tariff}
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="asideProfileBtns">
        <Link to={"/personalAccount/savedCards"}>
          <button>
            <img src="/star.svg" alt="Error" /> Избранное
          </button>
        </Link>
        <Link to={"/personalAccount/message"}>
          <button>
            <img src="/message.svg" alt="Error" /> Сообщения
          </button>
        </Link>
        <Link to={"/personalAccount/placeAd"}>
          <button>
            <img src="/asideSelect.svg" alt="Error" /> Разместить объявление{" "}
          </button>
        </Link>
        <Link to={"/personalAccount/tariff"}>
          <button>
            <img src="/elec.svg" alt="Error" /> Тариф
          </button>
        </Link>
        <Link to={"/personalAccount/accauntSettings"}>
          <button>
            <img src="/settings.svg" alt="Error" /> Настройки аккаунта
          </button>
        </Link>
      </div>
      <button className="logout">Выйти</button>
    </aside>
  );
};

export default Aside;
