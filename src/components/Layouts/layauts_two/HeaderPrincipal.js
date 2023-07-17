import Navbar from './NavBar'
import NavBarMobil from './NavBarMobil2'

export default function HeaderPrincipal() {
    return (
        <div>
            <div className="flex lg:hidden">
                <NavBarMobil />
            </div>
            <div className="hidden lg:flex">
                <Navbar />
            </div>
        </div>
    )
}
