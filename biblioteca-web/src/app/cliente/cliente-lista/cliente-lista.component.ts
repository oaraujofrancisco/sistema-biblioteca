import {Component, OnInit} from '@angular/core';
import Cliente from "../../core/models/cliente.model";

@Component({
    selector: 'app-cliente-lista',
    templateUrl: './cliente-lista.component.html',
    styleUrls: ['./cliente-lista.component.scss']
})
export class ClienteListaComponent implements OnInit {
    public clientes!: Cliente[];

    constructor() {
    }

    ngOnInit(): void {
    }

}
