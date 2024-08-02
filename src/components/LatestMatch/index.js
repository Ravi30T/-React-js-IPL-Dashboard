// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props

  /* const {umpires, result, man_of_the_match, id, date, venue, competing_team, competing_team_logo, first_innings, second_innings, match_status} = matchDetails */

  const newData = {
    umpires: matchDetails.umpires,
    result: matchDetails.result,
    manOfTheMatch: matchDetails.man_of_the_match,
    id: matchDetails.id,
    date: matchDetails.date,
    venue: matchDetails.venue,
    competingTeam: matchDetails.competing_team,
    competingTeamLogo: matchDetails.competing_team_logo,
    firstInnings: matchDetails.first_innings,
    secondInnings: matchDetails.second_innings,
    matchStatus: matchDetails.match_status,
  }

  const {
    umpires,
    result,
    id,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = newData

  return (
    <div>
      <Link to="/">
        <button type="button" className="back-btn">
          {' '}
          Back{' '}
        </button>
      </Link>
      <h1 className="latest-match-heading"> Latest Matches </h1>
      <div className="latest-match-main-container">
        <div className="latest-match-data-container">
          <div className="latest-match-venue-logo-container">
            <div className="latest-match-venue-container">
              <p className="competing-team"> {competingTeam} </p>
              <p className="latest-match-date"> {date} </p>
              <p className="latest-match-venue"> {venue} </p>
              <p className="latest-match-result"> {result} </p>
            </div>

            <div className="competing-team-logo-container">
              <img
                src={competingTeamLogo}
                className="competing-team-logo"
                alt={`latest match ${competingTeam}`}
              />
            </div>
          </div>

          <div className="horizontal-line">
            <hr />
          </div>

          <div className="latest-match-description-container">
            <p className="latest-match-first-innings-heading">First Innings</p>
            <p className="latest-match-first-innings-team">{firstInnings}</p>
            <p className="latest-match-second-innings-heading">
              Second Innings
            </p>
            <p className="latest-match-second-innings-team">{secondInnings}</p>
            <p className="latest-match-mom-heading"> Man Of The Match </p>
            <p className="latest-match-mom"> {manOfTheMatch} </p>
            <p className="latest-match-umpires-heading"> Umpires </p>
            <p className="latest-match-umpires"> {umpires} </p>
          </div>
        </div>
        {/* Medium Devices Design */}
        {/*
      <div className="lg-latest-match-container">
        <div className="lg-latest-match-venue-container">
          <p className="competing-team"> {competingTeam} </p>
          <p className="latest-match-date"> {date} </p>
          <p className="latest-match-venue"> {venue} </p>
          <p className="latest-match-result"> {result} </p>
        </div>

        <div className="lg-competing-team-logo-container">
          <img
            src={competingTeamLogo}
            className="competing-team-logo"
            alt={`competing team ${competingTeam}`}
          />
        </div>

        <div className="latest-match-details-container">
          <p className="latest-match-first-innings-heading">First Innings</p>
          <p className="latest-match-first-innings-team">{firstInnings}</p>
          <p className="latest-match-second-innings-heading">Second Innings</p>
          <p className="latest-match-second-innings-team">{secondInnings}</p>
          <p className="latest-match-mom-heading"> Man Of The Match </p>
          <p className="latest-match-mom"> {manOfTheMatch} </p>
          <p className="latest-match-umpires-heading"> Umpires </p>
          <p className="latest-match-umpires"> {umpires} </p>
        </div>
      </div>
      */}
      </div>
    </div>
  )
}

export default LatestMatch
