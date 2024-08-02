// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplTeams: [], isLoading: true}

  componentDidMount() {
    this.getIplTeamsData()
  }

  getIplTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const {teams} = data

    const updatedData = teams.map(each => ({
      id: each.id,
      teamName: each.name,
      teamLogo: each.team_image_url,
    }))

    this.setState({iplTeams: updatedData, isLoading: false})
  }

  render() {
    const {iplTeams, isLoading} = this.state
    return (
      <div className="dashboard-container">
        <div className="ipl-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
            alt="ipl logo"
          />
          <h1 className="main-heading"> IPL Dashboard </h1>
        </div>
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <ul className="dashboard-ipl-team-cards-container">
              {iplTeams.map(each => (
                <TeamCard key={each.id} teamData={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
