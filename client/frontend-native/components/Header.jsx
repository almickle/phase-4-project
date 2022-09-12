import Navbar from "./Navbar";
import Date from "./widgets/Date.jsx"
import Markets from "./widgets/Markets.jsx"
import Weather from "./widgets/Weather.jsx"

export default function Header() {
    return (
      <View>
        <span>
          <Date />
          <img src="" />
          <Weather />
        </span>
        <Navbar />
        <Markets />
      </View>
    );
  }