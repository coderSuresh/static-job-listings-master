import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Filter from './components/Filter'

const App = () => {

  const [jobs, setJobs] = React.useState([])
  const [filter, setFilter] = React.useState([])
  // const [filteredJobs, setFilteredJobs] = React.useState([])
  const [isFiltered, setIsFiltered] = React.useState(false)

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("../../data.json")
      const data = await res.json()
      setJobs(data)
    }

    fetchData()
  }, [])

  React.useEffect(() => {
    if (filter.length > 0)
      setIsFiltered(true)
    else
      setIsFiltered(false)
    console.log(filter)
  }, [filter])

  const cardElems = jobs.map(job => <Card key={job.id} data={job} filter={filter} setIsFiltered={setIsFiltered} setFilter={setFilter} />)

  return (
    <>
      <Header />
      <main className="my-10">
        {isFiltered && <Filter filter={filter} setFilter={setFilter} setIsFiltered={setIsFiltered} />}
        {cardElems}
      </main>
    </>
  )
}

export default App
