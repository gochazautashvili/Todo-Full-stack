import useUser from "./useUser";

function useLocalStorage() {
  const { Login } = useUser();

  const getUserToStorage = () => {
    const storageUser = localStorage.getItem("user");
    const user = storageUser ? JSON.parse(storageUser) : null;

    if (user) {
      const name = user?.name;
      const age = user?.age;
      const gmail = user?.gmail;

      Login({ name, age, gmail });
    }
  };

  return { getUserToStorage };
}

export default useLocalStorage;
