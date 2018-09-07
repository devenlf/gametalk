import tiezi from '@/views/tiezi/index'
import tiezifabu from '@/views/tiezifabu/index'

const childRouter = [
  { path: 'tiezi', component: tiezi },
  { path: 'fabuActive', component: tiezifabu },
]

export default childRouter