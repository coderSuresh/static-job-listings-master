import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Filter from './components/Filter'

const App = () => {

  const [jobs, setJobs] = React.useState([])
  const [filter, setFilter] = React.useState([])
  const [filteredJobs, setFilteredJobs] = React.useState([])
  const [isFiltered, setIsFiltered] = React.useState(false)

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("../../data.json")
      const data = await res.json()
      setJobs(data)
    }

    fetchData()
  }, [])

  const cardElems = jobs.map(job => <Card key={job.id} data={job} />)

  return (
    <>
      <Header />
      <main className="my-10">
        {isFiltered && <Filter filterBy={filteredJobs} setFilteredJobs={setFilteredJobs} />}
        {cardElems}
      </main>
    </>
  )
}

export default App
