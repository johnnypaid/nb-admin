import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'ID',
    'image',
    'title',
    'description',
    'price',
    'action',
  ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.products().subscribe((product) => {
      this.dataSource.data = product;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  delete(id: number): void {
    this.productService.delete(id).subscribe((res) => {
      console.log(res);
      this.dataSource.data = this.dataSource.data.filter(
        (p: any) => p.id !== id
      );
    });
  }
}
