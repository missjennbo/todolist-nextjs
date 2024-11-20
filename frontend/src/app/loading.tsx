import {NavbarComponent} from "@/app/components/NavbarComponent";

const LoadingPage = () => {
    return <>
        <NavbarComponent/>
        <div className="p-5">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    </>
}

export default LoadingPage;
