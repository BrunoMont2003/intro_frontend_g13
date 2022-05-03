import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/style.css'

import createData from './services/createData'
import getBanner, { setBanner } from './services/getBanner'

getBanner()
createData()
setBanner()
