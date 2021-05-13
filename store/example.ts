import { Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'
import {$axios} from '@/utils/nuxt-instance'

@Module({ name: 'example', stateFactory: true, namespaced: true })
export default class Example extends VuexModule {
  private example  = 0

  public get $example() {
    return this.example
  }

  @Mutation
  private INCREMENT(number: number) {
    this.example += number
  }

  @Action
  public increment() {
    this.context.commit('INCREMENT', 5)
  }
}