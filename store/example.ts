import { Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'
import {$axios} from '@/utils/nuxt-instance'

@Module({ name: 'example', stateFactory: true, namespaced: true })
export default class Example extends VuexModule {
  private count  = 0

  public get $count() {
    return this.count
  }

  @Mutation
  private INCREMENT(number: number) {
    this.count += number
  }

  @Action
  public increment(number: number) {
    this.context.commit('INCREMENT', number)
  }
}