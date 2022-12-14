import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) piecesInputRef: ElementRef;

  
  constructor(private slService: ShoppingListService) {
    let deleting;
  }

  ngOnInit() {
  }

  deleting() {
    
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingPieces = this.piecesInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount,ingPieces);
    this.slService.addIngredient(newIngredient);
  }
}
