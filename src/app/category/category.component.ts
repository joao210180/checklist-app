import { Component, OnInit } from '@angular/core';
import { Category } from '../_model/category';

export const CATEGORY_DATA = [
  { name: 'saude', guid: 'aaaaaaaaaa' },
  { name: 'Educacao', guid: 'aaaaaaaaaa' },
  { name: 'Trabalho', guid: 'aaaaaaaaaa' },
  { name: 'Outros', guid: 'aaaaaaaaaa' },
]

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'acao'];
 public dataSource: Category[] = CATEGORY_DATA;

  constructor() { }

  ngOnInit(): void {  }

  public editarCategory(category: Category){
    console.log('Editat categoria');
  }
  public deleleCategory(category: Category){
    console.log('deletar categoria');
  }
  public createNew(){
    console.log('Criando categoria');
  }
}
