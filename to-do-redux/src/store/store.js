import { createStore } from 'react'

import { todoApp } from '../reducers/app.reducer'

const store = createStore(todoApp)
