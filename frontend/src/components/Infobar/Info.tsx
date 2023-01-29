import "./Info.css";

const InfoBar = ({ room }: { room: any }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img
        className="onlineIcon"
        src={"https://i.ibb.co/Bj1tPXt/online-Icon.png"}
        alt="online icon"
      />
      <h3>Room No: {room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src={"https://i.ibb.co/djyYpPZ/close-Icon.png"} alt="close icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
