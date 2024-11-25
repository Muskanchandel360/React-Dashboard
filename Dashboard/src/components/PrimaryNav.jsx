
import Logo from "../assets/profile.png"
const PrimaryNav = () => {
    return(
        <nav class="primary-nav">
        <h1 id="logo">My <span>Dash.</span></h1>

        <ul class="primary-nav-links">
          <li>
            <h3><i class="fa-solid fa-house"></i> Home</h3>
          </li>
          <li>
            <h3><i class="fa-solid fa-briefcase"></i> Projects</h3>
          </li>
          <li>
            <h3><i class="fa-solid fa-file-lines"></i> Invoices</h3>
          </li>
          <li>
            <h3><i class="fa-solid fa-gear"></i> Settings</h3>
          </li>
        </ul>

        <span class="primary-profile">
          <img src={Logo} alt="" />
          <span>
            <h1>Batman</h1>
            <p>Cape Crusader</p>
          </span>
        </span>
      </nav>



    )
}
export default PrimaryNav