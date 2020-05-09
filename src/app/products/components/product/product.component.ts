
import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';
import { Product } from '../../../core/models/product.model';

import { CartService } from './../../../core/services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    constructor(
        private cartService: CartService
    ) {
        console.log('1.- constructor');
    }

    // ngOnChanges(changes: SimpleChanges) {
    //     console.log('2.- ngOnchages');
    //     console.log(changes);
    // }

    ngOnInit() {
        console.log('3.- ngOnInit');
        // Todo aqui es donde se hacen los llamados a los servicios de datos

    }

    ngDoCheck() {
        console.log('4.- DoCheck');
    }

    ngOnDestroy() {
        console.log('5.- ngOndestroy');
    }

    addCart() {
        console.log('añadir al carrito');
        // this.productClicked.emit(this.product.id);
        this.cartService.addCart(this.product);
    }
}
