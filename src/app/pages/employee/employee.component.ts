import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { user } from '../../models/userModel';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit, AfterViewInit {
    constructor(private userService: UserService) {}

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    employees: user[] = [];
    filteredEmployees: user[] = [];

    ngOnInit(): void {
        this.userService.getAllUsers().subscribe((res: user[]) => {
            this.employees = res;
            this.filteredEmployees = res;
            this.dataSource.data = this.employees;
        });
    }

    handleFilter(searchTerm : string) {
        if(!searchTerm) {
            this.dataSource.data = this.employees;
        } else {
            this.dataSource.data = this.employees.filter(employee => {
                return employee.name.toLowerCase().includes(searchTerm.toLowerCase())
            })
        }
    }

    columnsToDisplay = ['id', 'name', 'username', 'email', 'phone','actions'];

    dataSource = new MatTableDataSource<user>(this.employees);
}
