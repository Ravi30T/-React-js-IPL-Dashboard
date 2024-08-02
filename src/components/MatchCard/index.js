// Write your code here

import './index.css'

const MatchCard = props => {
  const {recentMatches} = props

  const updatedData = {
    competingTeam: recentMatches.competing_team,
    competingTeamLogo: recentMatches.competing_team_logo,
    id: recentMatches.id,
    matchStatus: recentMatches.match_status,
    result: recentMatches.result,
  }

  const {competingTeam, competingTeamLogo, id, matchStatus, result} =
    updatedData

  const matchWon =
    updatedData.matchStatus === 'Won' ? 'won-match-status' : 'lose-match-status'

  return (
    <li className="each-recent-match-card">
      <img
        src={competingTeamLogo}
        className="recent-match-team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="recent-match-team-name"> {competingTeam} </p>
      <p className="recent-match-result"> {result} </p>
      <p className={matchWon}> {matchStatus} </p>
    </li>
  )
}

export default MatchCard
