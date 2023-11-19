import { reactive } from 'vue'

const mockRecipe = {
  name: 'Pilzpfanne mit Hirtenkäse',
  duration: '40 Minuten',
  ingredients: [
    {
      amount: '200g',
      description: 'Speisequark'
    },
    {
      amount: '1 Packung',
      description: 'Hirtenkäse'
    },
    {
      amount: '400g',
      description: 'Champignons'
    },
    {
      amount: '1 Becher',
      description: 'Crème fraîche'
    }
  ],
  steps: [
    {
      description: 'Champignons putzen und in Scheiben schneiden.'
    },
    {
      description: 'Die Champignons in einer Pfanne mit etwas Öl anbraten.'
    },
    {
      description: 'Quark und Crème fraîche in die Pfanne geben und verrühren.'
    },
    {
      description: 'Den Hirtenkäse über die Pilzmasse bröseln und schmelzen lassen.'
    },
    {
      description: 'Mit Salz und Pfeffer abschmecken und nach Belieben mit Kräutern verfeinern.'
    }
  ]
}

export const recipeStore: any = reactive({
  recipe: mockRecipe,
  imageUrl: 'https://via.placeholder.com/150',
  history: [mockRecipe],
  recognizedIngredients: []
} as const)
