// Write your code here

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props

  const {id, teamName, teamLogo} = teamData

  return (
    <Link className="link-item" to={`/team-matches/${id}`}>
      <li className="each-team-card">
        <img src={teamLogo} className="team-card-team-logo" alt={teamName} />
        <p className="team-card-team-name"> {teamName} </p>
      </li>
    </Link>
  )
}

export default TeamCard
