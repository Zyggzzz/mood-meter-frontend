import { adminAuthenticate } from "~/server/apiCalls";

interface AdminLoginProps {
  setLoading: (loading: boolean) => void;
}

export default function AdminLogin(props: AdminLoginProps) {
  const { setLoading } = props;
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const auth = await adminAuthenticate(username, password);
    if (auth.message === "Login succesful") {
      setLoading(false);
    }
  }
  return (
    <div className="fixed z-50 flex h-screen w-screen flex-col items-center justify-center bg-whiteBg">
      <h1>You are not authenticated! Please authenticate to continue.</h1>
      <form
        onSubmit={(event) => {
          submit(event);
        }}
        className="flex flex-col"
      >
        <input
          className="w-full rounded border border-gray-300 p-2"
          type="text"
          placeholder="Username"
          name="username"
        />
        <input
          className="mt-2 rounded border border-gray-300 p-2"
          type="password"
          placeholder="Password"
          name="password"
        />
        <button className="mt-2 rounded bg-blue-500 px-4 py-2 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
