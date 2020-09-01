
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/login', () => { console.log('login') })
}
