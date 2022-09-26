import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClienteRoutingModule} from './cliente-routing.module';
import {ClienteListaComponent} from './cliente-lista/cliente-lista.component';
import {TableModule} from "primeng/table";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        ClienteListaComponent
    ],
    imports: [
        CommonModule,
        ClienteRoutingModule,
        TableModule,
        MatButtonModule
    ]
})
export class ClienteModule {
}
