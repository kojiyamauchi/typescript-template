# TypeScript Templates.  
```
Root
|
|- /base
|     |- *.js -> Creates Entry Point for Each View Page.
|     |- /Apps -> App**.ts is Choose Required Modules.ts for Each Pages. And Pass to *.js
|     |- /Modules -> Various Modules.ts
|     |     |- /Globals -> Set Modules to Be Used on All Pages.  
|     |     |              - It Will Always be Imported into AppGlobal.ts.
|     |     |- /Commons -> Set Modules to Be Used on Multiple Pages.  
|     |     |              - When App**.ts Imported Modules From This Directory, 
|     |     |                Get DOM From Their Constructor, Distribute DOM to Each Modules.
|     |     |- /Privates -> Set Modules to Be Used on Single Pages.
|     |
|     |- /SubModules -> When Create Sub Modules.( Like a Mixins.)
|
|- /types -> Type Files. / Declaration・Type・Interface・Enum
|
|- /tests -> Add Test Files. ( Use Jest. )
```  
## Related Repo.  
- Development Environment.  
  - [Frontend Dev Starter.](https://github.com/kojiyamauchi/frontend-dev-starter)  

When Create Static Web Site, Clone This Repository in `resource` Directory. 🔨
