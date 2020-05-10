/*
 AppGlobal.ts
*/

// Import Modules.
import Module1 from '@/Modules/Module1'
import Module2 from '@/Modules/Module2'

// Import Interface.
// Add Path Here.

export default class AppGlobal {
  // Types.
  private module1: Module1
  private module2: Module2

  public constructor() {
    this.module1 = new Module1('Module1!')
    this.module2 = new Module2('Module2!')
  }

  public init(): void {
    this.module1.core()
    this.module2.core()
  }

  public domContentLoaded(): void {
    // Add DOM Content Loaded Method.
  }

  public load(): void {
    // Add Load Method.
  }

  public resize(): void {
    // Add Resize Method.
  }

  public scroll(): void {
    // Add Scroll Method.
  }
}
