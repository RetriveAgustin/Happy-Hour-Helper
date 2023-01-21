import { Link } from "react-router-dom";
import { Card } from '../../components/Card/Card'

export default function LandingPage() {
      return (
        <>
          <Link to='/form'>
            <button>Create</button>
          </Link>
          <Card />
        </>
      )
  }

