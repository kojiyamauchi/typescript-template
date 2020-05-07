/*
 AppCore.ts
*/

// Import Modules.
import Module3 from '@/Modules/Module3'
import Module4 from '@/Modules/Module4'

// Import Interface.
// Add Path Here.

export default class AppCore {
  // Types.
  private module3: Module3
  private module4: Module4

  private constructor() {
    this.module3 = new Module3('Module3!')
    this.module4 = new Module4('Module4!')
  }

  public init(): void {
    this.module3.core()
    this.module4.core()
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
