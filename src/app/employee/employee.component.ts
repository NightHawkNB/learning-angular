import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { user } from '../models/userModel';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit {

  constructor(private userService : UserServiceService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  employees: user[] = [];

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((res : user[]) => {
      this.employees = res;
      this.dataSource.data = this.employees;
    });
  }

  columnsToDisplay = ['id', 'name', 'username', 'email', 'phone'];

  dataSource = new MatTableDataSource<user>(this.employees);

}
