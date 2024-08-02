// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import TeamStatistics from '../TeamStatistics'

import './index.css'

class TeamMatches extends Component {
  state = {teamStats: [], isLoading: true, id: '1'}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props

    const {params} = match

    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()

    const updatedTeamStats = {
      teamLogo: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({teamStats: updatedTeamStats, isLoading: false, id})
  }

  render() {
    const {teamStats, isLoading, id} = this.state

    const {teamLogo, latestMatchDetails, recentMatches} = teamStats

    return (
      <div className={`team-stats-main-container ${id}`}>
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-stats-container">
            <div className="team-banner-container">
              <img src={teamLogo} className="team-banner" alt="team banner" />
            </div>

            <div className="latest-match-container">
              <LatestMatch matchDetails={latestMatchDetails} />
            </div>

            <div className="stats-container">
              <h1 className="stats-heading"> Team Stats </h1>
              <TeamStatistics
                data={recentMatches}
                currentMatch={latestMatchDetails}
              />
            </div>

            <div>
              <ul className="recent-match-cards-container recent-match-list-container">
                {recentMatches.map(each => (
                  <MatchCard key={each.id} recentMatches={each} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
