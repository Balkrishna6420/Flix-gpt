import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className=" absolute w-screen px-8 py-2 bg-linear-to-b from-black to-transparent z-10 flex justify-between">
      <img
        className="w-44"
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAZge2REfWoSoWRs31izjUdgihldMUslSHTdfz-1aT4vVrgJuVByU92G8wIrBkwULJHWjM1khpzW0xWndigQFYViKFpy-pM6NZFnTKEPkpf9hcdSzCyzqBbcouyIpmgVLbodhaeyqCXaS.svg"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
