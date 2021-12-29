import Alert from "../component/layout/Alert";
import UserResults from "../component/users/UserResults";
import UserSearch from "../component/users/UserSearch";

function Home() {
  return (
    <>
      <Alert />
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;
