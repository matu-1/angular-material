import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from '../curso';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

const CURSOS: Curso[] = [
  {
    id: 1,
    name: 'Angular desde cero',
    description: 'Aprende angular desde lo basico',
    specialty: 'angular',
    startDate: '2020-05-05',
  },
  {
    id: 2,
    name: 'Php desde cero',
    description: 'Aprende php desde lo basico',
    specialty: 'php',
    startDate: '2020-05-05',
  },
  {
    id: 3,
    name: 'React desde cero',
    description: 'Aprende react desde lo basico',
    specialty: 'react',
    startDate: '2020-05-05',
  },
  {
    id: 4,
    name: 'Flutter desde cero',
    description: 'Aprende flutter desde lo basico',
    specialty: 'flutter',
    startDate: '2020-05-05',
  },
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Curso>(CURSOS);
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'specialty',
    'startDate',
    'actions',
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onFilter(target: any) {
    this.dataSource.filter = (target.value as string).trim().toLowerCase();
  }

  onEdit(curso: Curso) {
    console.log('edit', curso);
    this.openDialog(curso);
  }

  openDialog(curso: Curso) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '600px',
      data: curso
    });
  }
}
