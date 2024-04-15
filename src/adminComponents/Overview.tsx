

const Overview = () => {
  return (
    <div className="overview">
    <label>Overview </label>
    <select title="first" id="select1" value="Last 7 days">
      <option value="Last 7 days">
        <p>last 7 days</p>
      </option>
      <option value="Last 1 week">
        <p>last 1 week</p>
      </option>
      <option value="last 2 weeks">
        <p>last 2 weeks</p>
      </option>
    </select>
  </div>
  )
}

export default Overview