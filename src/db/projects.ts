export const projectsDB = [
  {
    id: 1,
    name: 'Weather App',
    description: 'Accurate source of weather forecasts',
    githubLink: 'https://github.com/RenanSui/weather-app',
    liveDemoLink: 'https://ren-weatherapp.vercel.app',
    imagePreview: 'bg-[url(/images/weather.png)]',
  },
  {
    id: 2,
    name: 'Pokédex',
    description: 'Detailed stats for every creature from the Pokémon games',
    githubLink: 'https://github.com/RenanSui/pokedex',
    liveDemoLink: 'https://ren-pokedex.vercel.app',
    imagePreview: 'bg-[url(/images/pokedex.png)]',
  },
  {
    id: 3,
    name: 'Expense Tracker',
    description: 'Tracking where your money is going',
    githubLink: 'https://github.com/RenanSui/expense-tracker',
    liveDemoLink: 'https://renansui.github.io/expense-tracker/',
    imagePreview: 'bg-[url(/images/tracker.png)]',
  },
]

export type ProjectsDB = typeof projectsDB
