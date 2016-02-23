
import React from 'react'

const Table = ({ headers, data, color, ...props }) => (
  <div style={{
      maxWidth: '100%',
      overflowX: 'scroll'
    }}>
    <table style={{
        borderCollapse: 'separate',
        borderSpacing: 0,
        maxWidth: '100%',
        width: '100%'
      }}>
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i}
              style={{
                textAlign: 'left',
                verticalAlign: 'bottom',
                padding: 8,
                borderBottom: `2px solid ${color}`
              }}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((d, i) => (
              <td key={i}
                style={{
                  padding: 8,
                  borderBottom: `1px solid ${color}`
                }}>
                {d}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

Table.propTypes = {
  headers: React.PropTypes.array,
  data: React.PropTypes.arrayOf(
    React.PropTypes.array
  ),
  color: React.PropTypes.string
}

Table.defaultProps = {
  color: '#ccc'
}

export default Table

