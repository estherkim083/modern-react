import "./styles.css";
import UsersList from "./components/UsersList";

export default function App() {
  return (
    <div
      className="container mx-auto"
      style={{ margin: "100px", width: "50%" }}
    >
      <UsersList />
    </div>
  );
}
