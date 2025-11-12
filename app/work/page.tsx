import { Projects } from '@/components/projects'
import { getAllProjects } from '@/lib/data'

const WorkPage = async () => {
  const projects = getAllProjects()
  return <Projects isProjectsPage={true} projects={projects} />
}

export default WorkPage
