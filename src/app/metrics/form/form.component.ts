import { Component, OnInit } from '@angular/core';
import { Metric } from '../../core/models/metric';
import { MetricsService } from '../../core/services/metrics/metrics.service';

@Component({
  selector: 'mymetrics-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  metric: Metric = new Metric();

  constructor(private metricService: MetricsService) {
  }

  ngOnInit() {
  }

  sendMetric() {
    this.metricService.postMetric(this.metric).subscribe();
  }
}
