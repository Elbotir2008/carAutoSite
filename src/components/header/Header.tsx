import "./header.scss";
import Badge from "@mui/joy/Badge";

const Header = () => {
  return (
    <div>
      <header className="headerTop">
        <div className="container">
          <nav className="flex-class">
            <div className="headerTop-left">
              <ul className="flex-class">
                <li>
                  <a href="#">Главная</a>
                </li>
                <li>
                  <a href="#">Каталог</a>
                </li>
                <li>
                  <a href="#">О нас</a>
                </li>
                <li>
                  <a href="#">Новости</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
              </ul>
            </div>
            <div className="headerTop-right flex-class">
              <div className="socailMediaImg flex-class">
                <img src="/wk.svg" className="wk" alt="Error" />
                <img src="/whatsapp.svg" alt="Error" />
                <img src="/instagramm.svg" alt="Error" />
              </div>
              <div className="phoneBox">
                <img src="/phone.svg" alt="Error" />
                <a href="tel:+7 (777) 777-77-77">+7 (777) 777-77-77</a>
              </div>
              <div className="mailBox">
                <img src="/email.svg" alt="Error" />
                <a href="mailto:Info@mail.ru">Info@mail.ru</a>
              </div>
              <select>
                <option value="RU &#709;" defaultChecked>
                  RU
                </option>
                <option value="EN">EN</option>
                <option value="UZ">UZ</option>
              </select>
            </div>
          </nav>
        </div>
      </header>
      <header className="headerMain">
        <div className="container">
          <nav className="flex-class">
            <img
              src="/logo.svg"
              onClick={() => location.reload()}
              alt="Error"
            />
            <div className="headerMain-links">
              <ul className="flex-class">
                <li>
                  <a href="#">Автомобили</a>
                  <span>&gt;</span>
                </li>
                <li>
                  <a href="#">Коммерческий транспорт</a>
                  <span>&gt;</span>
                </li>
                <li>
                  <a href="#">Мотоциклы</a>
                  <span>&gt;</span>
                </li>
              </ul>
            </div>
            <div className="headerMain-input flex-class">
              <img src="/search-1.svg" alt="Error" />
              <input type="text" placeholder="Поиск автомобилей" />
            </div>
            <Badge badgeContent="3+">
              <img src="/notification.svg" alt="Error" />
            </Badge>
            <div className="profileInf flex-class">
              <h2>Хамзат Хусейнович Арсланалиев</h2>
              <div className="logoImg">
                <h3 className="defaultLogoImg">XX</h3>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
