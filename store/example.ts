import { Module, VuexModule} from 'vuex-module-decorators'
import {$axios} from '@/utils/nuxt-instance'

@Module({ name: 'example', stateFactory: true, namespaced: true })
export default class Example extends VuexModule {
  example  = []
}