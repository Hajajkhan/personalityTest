import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
  favoriteSeason: string = '';
  arrayForAddition: any = [];
  sum: any = null;
  storingData = '';
  buttonDisabled = false;
  objectofValue: any = {};
  message: string = '';
  firstOptions: any[] = [
    {
      option: 'Don’t dare to interrupt them Think',
      value: 14,
      selected:false
    },
    {
      option:
      'it’s more important to give them some of your time; work can wait',
      value: 13,
      selected:false
    },
    {
      option: 'Listen, but with only with half an ear',
      value: 15,
      selected:false
    },
    {
      option: 'Interrupt and explain that you are really busy at the moment',
      value: 16,
      selected:false
    },
  ];
  secondOptions: any[] = [
    {
      option: 'Look at your watch every two minutes',
      value: 12,
      selected:false
    },
    {
      option: 'Bubble with inner anger, but keep quiet',
      value: 11,
      selected:false
    },
    {
      option:
        'Explain to other equally impatient people in the room that the doctor is always running late',
      value: 17,
      selected:false
    },
    {
      option: 'Complain in a loud voice, while tapping your foot impatiently',
      value: 18,
      selected:false
    },
  ];
  thirdOptions: any[] = [
    {
      option: 'Don’t dare contradict them',
      value: 10,
      selected:false
    },
    {
      option: 'Think that they are obviously right',
      value: 9,
      selected:false
    },
    {
      option: 'Defend your own point of view, tooth and nail',
      value: 19,
      selected:false
    },
    {
      option: 'Continuously interrupt your colleague',
      value: 20,
      selected:false
    },
  ];
  fourthOptions: any[] = [
    {
      option: 'Don’t dare contradict them',
      value: 8,
      selected:false
    },
    {
      option:
        'Are a bit too far towards the back so don’t really hear what the guide is saying',
      value: 7,
      selected:false
    },
    {
      option: 'Make sure that everyone is able to hear properly',
      value: 21,
      selected:false
    },
    {
      option:
        'Are right up the front, adding your own comments in a loud voice',
      value: 22,
      selected:false
    },
  ];
  onChangeItem(data: any) {
    this.objectofValue = {
      Q: data.value,
    };
    console.log(this.arrayForAddition);
    data.selected = true;
    this.buttonDisabled = true;
  }
  onSecondChangeItem(data: any) {
    this.objectofValue = {
      Q: data,
    };
    console.log(this.arrayForAddition);
    this.buttonDisabled = true;
  }
  onThirdChangeItem(data: any) {
    this.objectofValue = {
      Q: data,
    };
    console.log(this.arrayForAddition);
    this.buttonDisabled = true;
  }
  onFourthChangeItem(data: any) {
    this.objectofValue = {
      Q: data,
    };
    console.log(this.arrayForAddition);
    this.buttonDisabled = true;
  }

  disableButton() {
    this.buttonDisabled = false;
    this.arrayForAddition.push(this.objectofValue);
    console.log(this.arrayForAddition);
  }

  constructor(private router: Router) {}
  getResult() {
    let initialValue=0;
    this.arrayForAddition.push(this.objectofValue);
    this.sum = this.arrayForAddition.reduce(
      (previousValue: any, currentValue: any) => {
       return previousValue + currentValue.Q
      },initialValue
    );
    console.log("sum", this.sum);
    if (this.sum >= 60) {
      this.message = '"You are Extrovert Person"';
    } else {
      this.message = '"You are Introvert Person"';
    }
    this.router.navigate(['/resultant'], { state: { data: this.message}})
  }

  ngOnInit(): void {}
}
