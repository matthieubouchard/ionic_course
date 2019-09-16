import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { PersonsComponent } from "./persons/persons.component";
import { PersonInputComponent } from "./persons/person-input.component";

const routes: Routes = [
  { path: "", component: PersonsComponent },
  { path: "input", component: PersonInputComponent }
];

@NgModule({
  imports: [
    // pass routes
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
