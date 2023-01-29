
import "./TextContainer.css";

const TextContainer = ({ users }: { users: any }) => (
  <div className="textContainer">
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }: { name: any }) => (
              <div key={name} className="activeItem">
                {name}
                <img
                  alt="Online Icon"
                  src={"https://i.ibb.co/Bj1tPXt/online-Icon.png"}
                />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
