export const projectItems = [
  {
    id: 1,
    name: 'Salvage',
    description: 'Simple Backup Automator',
    githubLink: 'https://github.com/RenanSui/salvage',
    liveDemoLink: 'https://github.com/RenanSui/salvage',
    imagePreview: 'bg-[url(/images/salvage.png)]',
  },
  {
    id: 2,
    name: 'Poképedia',
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
  {
    id: 4,
    name: 'Weatherium',
    description: 'Accurate source of weather forecasts',
    githubLink: 'https://github.com/RenanSui/weather-app',
    liveDemoLink: 'https://ren-weatherapp.vercel.app',
    imagePreview: 'bg-[url(/images/weather.png)]',
  },
]

export type ProjectItems = (typeof projectItems)[0]
