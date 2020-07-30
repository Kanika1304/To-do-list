import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do-List';
  t=[
    {
      label: 'Milk',
      status: true,
      quantity: 3
    },
    {
      label: 'Veggies',
      status: false,
      quantity: 8
    },
    {
      label: 'Snacks',
      status: false,
      quantity: 1
    },
    {
      label: 'butter',
      status: true,
      quantity: 1
    },

  ];

  addTodo(newTextLabel){
    var newText={
      label: newTextLabel,
      status: false,
      quantity: 0
    };

    if(newText.label == ''){
    }
    else{
      this.t.push(newText);
    }
  }

  delTodo(t1){
    this.t= this.t.filter( ting => ting.label !== t1.label);
  }
}
