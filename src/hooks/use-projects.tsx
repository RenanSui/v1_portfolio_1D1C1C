import { ProjectItem } from '@/features/menu-sections/types'
import { useEffect, useState } from 'react'
import { client } from '../../sanity/lib/client'

async function getProjects(): Promise<ProjectItem[]> {
  const query = `
    *[_type == 'projects'] | order(_createdAt asc) {
      "id": _id,
      title,
      "slug": slug.current,
      titleImage,
      description,
      liveDemoLink,
      githubLink
    }
  `

  return await client.fetch<ProjectItem[]>(query)
}

export const useProjects = () => {
  const [projects, setProjects] = useState<ProjectItem[] | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      const fetchedProjects = await getProjects()
      setProjects(fetchedProjects)
    }
    fetchProjects()
  }, [])

  console.log({ projects })

  return projects
}
