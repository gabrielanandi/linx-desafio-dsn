import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public title:string;
	public data:any;

	construct(){
	}

	ngOnInit() {
		this.data = require('../assets/test.json');
		console.log("Json data", this.data);
		this.title = 'Landing Page Blá';
	}
}