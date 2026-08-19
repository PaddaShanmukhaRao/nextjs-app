
import Link from "next/link";

export default function App() {
  return (
    <>
      <div className="text-2xl h-screen w-screen flex items-center justify-center">
        <div>
          Todo Application
          <br />
          <Link className="rounded-md border" href="/signin">Signin</Link>
          <br />
          <Link href="/signup">Signup</Link>
        </div>
      </div>
    </>
  );
}
