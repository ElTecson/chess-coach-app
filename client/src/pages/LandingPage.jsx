// Import page's stylesheet
import '@/pages/css/LandingPage.css';

import WebLogo from '@/components/WebLogo';
import { Link, useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  }

  return (
    <>
      <header>
        <WebLogo />
      </header>
      <main>
        <div className="container">
          <h1>
            Level Up Your Chess in Days,<br/>Not Years.
          </h1>
          <p className="desc">Train with powerful tools designed for ambitious players.</p>
        </div>
        <div className="container">
          <button className="cta-btn" onClick={handleClick}>SIGN UP!</button>
          <p className="link"><Link to={'/login'}>Already have an account?</Link></p>
        </div>
      </main>
    </>
  )
}

export default LandingPage;

