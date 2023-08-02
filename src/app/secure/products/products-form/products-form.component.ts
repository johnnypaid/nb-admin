import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { RouteData } from 'src/app/interfaces/formroute';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css'],
})
export class ProductsFormComponent implements OnInit {
  form!: FormGroup;
  create!: boolean;
  data: any;
  id!: number;

  constructor(
    private formBuider: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.data = this.route.snapshot.data;
  }

  ngOnInit(): void {
    this.form = this.formBuider.group({
      title: '',
      description: '',
      image: '',
      price: 0,
    });

    this.create = this.data.create;
    if (!this.create) {
      this.id = this.route.snapshot.params['id'];
      this.productService.getProduct(this.id).subscribe((product) => {
        this.form.patchValue(product);
      });
    }
  }

  submit(): void {
    const method = this.create
      ? this.productService.create(this.form.getRawValue())
      : this.productService.update(this.id, this.form.getRawValue());

    method.subscribe(() => this.router.navigate(['/products']));
  }
}
