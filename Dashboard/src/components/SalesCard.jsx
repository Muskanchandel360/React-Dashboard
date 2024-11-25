const SalesCard = () => {
    return (
        <div class="card">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#525ceb"
            fill-opacity="1"
            d="M0,128L60,154.7C120,181,240,235,360,245.3C480,256,600,224,720,192C840,160,960,128,1080,133.3C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>

        <span>
          <h1 class="display-1"><i class="fa-solid fa-chart-pie"></i></h1>
          <div>
            <h2 class="display-2">08-Jan-2024</h2>
            <h1 class="display-1">Sales</h1>
          </div>
        </span>
      </div>

    )
}
export default SalesCard