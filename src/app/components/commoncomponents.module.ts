import { NgModule } from "@angular/core";
import { BottombarComponent } from "./bottombar/bottombar.component";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations: [BottombarComponent, HeaderComponent],
    exports: [BottombarComponent, HeaderComponent],
    imports: [IonicModule]
})

export class CommonComponents{}