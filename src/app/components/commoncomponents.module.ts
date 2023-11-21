import { NgModule } from "@angular/core";
import { BottombarComponent } from "./bottombar/bottombar.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
    declarations: [BottombarComponent],
    exports: [BottombarComponent],
    imports: [IonicModule]
})

export class CommonComponents{}