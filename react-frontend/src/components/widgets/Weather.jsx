import partly_cloudy from "./assets/partly_cloudy.jpg"
export default function Weather( { size, marginTop }) {
    return (
      <img src={partly_cloudy}
            style={{
              height: size,
              width: undefined,
              aspectRatio: 184 / 192,
              marginRight: 40,
              marginTop: marginTop,
            }}/>
    );
  }