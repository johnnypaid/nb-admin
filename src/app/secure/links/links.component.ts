import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from 'console';
import { Order } from 'src/app/interfaces/order';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
})
export class LinksComponent implements OnInit {
  displayedColumns: string[] = ['id', 'code', 'count', 'revenue'];
  dataSource = new MatTableDataSource();
  id!: number;

  constructor(
    private linkService: LinkService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.linkService.links(this.id).subscribe((links) => {
      console.log(links);
      this.dataSource.data = links;
    });
  }

  sum(orders: Order[]): number {
    return orders.reduce((s, o) => s + o.total, 0);
  }
}
