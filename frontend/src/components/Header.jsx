import headerImage from "../assets/img/header-image.png";

import "../assets/css/Header.css";

const Header = () => {
    return (
        <header className="Header">
            <form action="/" method="post">
                <h1>Explore and Travel</h1>

                <h4>Holiday finder</h4>

                <div>
                    <select name="location" id="location">
                        <option value="location" disabled>
                            Location
                        </option>
                        <option value="china">China</option>
                        <option value="indonesia">Indonesia</option>
                        <option value="montenegro">Montenegro</option>
                        <option value="switzerland">Switzerland</option>
                    </select>

                    <select name="activity" id="activity">
                        <option value="activity" disabled>
                            Activity
                        </option>
                        <option value="yoga">Golf</option>
                        <option value="yoga">Tennis</option>
                        <option value="yoga">Surfing</option>
                        <option value="yoga">Yoga</option>
                    </select>
                </div>

                <input type="submit" value="Explore" className="ButtonOrange" />
            </form>

            <img src={headerImage} alt="Header" />
        </header>
    );
};

export default Header;
