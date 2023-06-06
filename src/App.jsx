import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Filter from './components/Filter'
import data from '/data.json'

const App = () => {
  const [jobs, setJobs] = React.useState(data)
  const [filter, setFilter] = React.useState([])
  const [isFiltered, setIsFiltered] = React.useState(false)
  const [originalJobs, setOriginalJobs] = React.useState(data)

  React.useEffect(() => {
    if (filter.length > 0) {
      setIsFiltered(true)

      const filteredJobs = originalJobs.filter((job) => {
        const tech = [job.role, job.level, ...job.languages, ...job.tools]
        return filter.every((f) => tech.includes(f))
      })

      setJobs(filteredJobs)
    } else {
      setIsFiltered(false)
      setJobs(originalJobs)
    }
  }, [filter, originalJobs])

  const cardElems = jobs.length > 0 ? (
    jobs.map((job) => (
      <Card
        key={job.id}
        data={job}
        filter={filter}
        setIsFiltered={setIsFiltered}
        setFilter={setFilter}
      />
    ))
  ) : (
    <p>No job found!</p>
  )

  return (
    <>
      <Header />
      <main className="my-10">
        {isFiltered && (
          <Filter filter={filter}
            setFilter={setFilter}
            setIsFiltered={setIsFiltered} />
        )}
        {cardElems}
      </main>
    </>
  )
}

export default App
