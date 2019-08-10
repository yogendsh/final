import { Component, OnInit , TemplateRef} from '@angular/core';
import * as Highcharts from 'highcharts';
import { Router } from '@angular/router';
import { TableComponent } from '../table/table.component';
import { DialogService } from 'primeng/api';



@Component({
  selector: 'app-demand-manager',
  templateUrl: './demand-manager.component.html',
  styleUrls: ['./demand-manager.component.scss']
})
export class DemandManagerComponent implements OnInit {
 
  begin:Date;
  end:Date;
  

  constructor(private router: Router,private dialogService :DialogService) { }

  ngOnInit() {
  }
 

  submit()
  {
    alert(this.begin);

  }
  
  highcharts = Highcharts;
  chartOptions = {
    title : { text : 'Angular 2 high charts example with selection event ' },
  
        chart: { type:'pie',
        plotShadow: false,
      enableMouseTracking:true, 
    },
      tooltip: {
        pointFormat: '{point.name:}:{point.percentage:.1f}%'
    },  
  series: [{
    name: 'details', 
    
    data: [{
      name : 'Request Raised',
      y:65,
      color: 'pink',
      selected: false,
      
    },
  {
    name: 'fulfilled',
    y:45,
    color:'blue',
    selected: false,
  },
  ],
}],
  

plotOptions: {
series:{
cursor:'pointer',
  events:{
    click:(e)=>
    {
      this.onChartClick();
    }
  }
}


  
},
 
     };
     lineChartOptions = {
      title : { text : 'Angular 2 high charts example with selection event ' },
    
          chart: { type:'line',
          plotShadow: false,
        enableMouseTracking:true, 
      },
        tooltip: {
          pointFormat: '{point.name:}:{point.percentage:.1f}%'
      },  
    series: [{
      name: 'details', 
      
      data: [{
        name : 'Request Raised',
        y:65,
        color: 'pink',
        selected: false,
        
      },
    {
      name: 'fulfilled',
      y:45,
      color:'blue',
      selected: false,
    },
    ],
  }],
    
  
  plotOptions: {
  series:{
  cursor:'pointer',
    events:{
      click:(e)=>
      {
       
        this.onChartClick();
      }
    }
  }
  
  
    
  },
   
       };
     onChartClick(){
     
    }
    openTable(){
      this.router.navigateByUrl('table');
    }
    raisepopup(){

      const ref = this.dialogService.open(TableComponent, {
        header: 'Select Employees',
        width: '50%',
        height:'70%'
        
    });
    
  }

      
    };
      
    