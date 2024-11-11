import UserButtonComponent from "@/app/components/UserButtonComponent";
import {SomeButtonComponent} from "@/app/components/SomeButtonComponent";

export default function Home() {
  return (
      <main>
          <h1>Hello World!</h1>
          <UserButtonComponent/>
          <SomeButtonComponent/>
      </main>
  );
}
