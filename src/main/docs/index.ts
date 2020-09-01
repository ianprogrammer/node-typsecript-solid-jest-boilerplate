import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'OSApp',
    description: 'Essa é a documentação da API feita para o OSApp',
    version: '1.0.0',
    contact: {
      name: 'Ian Oliveira',
      email: 'ianprogrammer@gmail.com'
    }
  },
  servers: [{
    url: '/api',
    description: 'Servidor Principal'
  }],
  tags: [{
    name: 'Login',
    description: 'APIs relacionadas a Login'
  }],
  paths,
  schemas,
  components
}
