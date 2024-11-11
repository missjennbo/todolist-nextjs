import UserButtonComponent from "@/app/components/UserButtonComponent";
import {SomeButtonComponent} from "@/app/components/SomeButtonComponent";
import {UserDropdownComponent} from "@/app/components/UserDropdownComponent";

export default function Home() {
    return (
        <main>
            <h1>Aufgabenliste</h1>
            <UserDropdownComponent/>
            <UserButtonComponent/>
            <SomeButtonComponent/>
        </main>
    );
}
