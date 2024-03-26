export namespace TestApplicationEvent {
  export namespace TestCreated {
    export const key = 'test.application.test.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
