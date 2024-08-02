import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const TeamStatistics = props => {
  const {data, currentMatch} = props

  let winCount = data.filter(each => each.match_status === 'Won').length
  let lostCount = data.filter(each => each.match_status === 'Lost').length
  let drawCount = data.filter(each => each.match_status === 'Draw').length

  switch (currentMatch.match_status) {
    case 'Won':
      winCount += 1
      break
    case 'Lost':
      lostCount += 1
      break
    case 'Draw':
      drawCount += 1
      break
    default:
      return null
  }

  const statistics = [
    {
      count: winCount,
      name: 'Won',
    },
    {
      count: lostCount,
      name: 'Lost',
    },
    {
      count: drawCount,
      name: 'Draw',
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={300} className="pie-container">
      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={statistics}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Won" fill="#00ff00" />
          <Cell name="Lost" fill="#ff0000" />
          <Cell name="Draw" fill="##0000ff" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default TeamStatistics
