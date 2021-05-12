import { Module, VuexModule} from 'vuex-module-decorators'

@Module({ name: 'example', stateFactory: true, namespaced: true })
export default class Example extends VuexModule {
  example  = []
}