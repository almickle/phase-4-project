import partly_cloudy from "./assets/partly_cloudy.jpg"
export default function Weather( { size }) {
    return (
      <img src={partly_cloudy}
            style={{
              height: size,
              width: undefined,
              aspectRatio: 184 / 192,
              marginRight: 40,
              marginTop: 60,
            }}/>
    );
  }