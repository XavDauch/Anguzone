import { Component, OnDestroy, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Products } from 'src/app/models/products';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {implements OnInit, OnDestroy {
  private _product?: Product | undefined;

  @Input()
  public get product(): Product | undefined {
    return this._product;
  }

  public set Product(value: Product | undefined) {
    this._product = value;
  }

  constructor(private loggingService: LoggingService) {
  }

  @Output() delete = new EventEmitter<string>();

  onDeleteBtnClick() {
    if (!this.product) return;
    this.delete.emit(this.product.name);
  }

  ngOnInit(): void {
    if (!this.product) return;
  }

  ngOnDestroy(): void {
    if (!this.product) return;
  }
}

