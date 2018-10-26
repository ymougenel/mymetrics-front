import { Component, OnInit } from '@angular/core';
import { Metric } from '../../core/models/metric';
import { MetricsService } from '../../core/services/metrics/metrics.service';
import { getMockList } from '../../core/models/mock/metric-mock';

@Component({
  selector: 'mymetrics-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  metrics: Metric[] = getMockList();

  constructor(private metricService: MetricsService) {
  }

  ngOnInit() {
  }

  sendMetric() {
    for (const metric of this.metrics) {
      console.log(metric.id);
      console.log(metric.type);
      console.log(metric.value);
      console.log(metric.date);
      this.metricService.postMetric(metric).subscribe();
    }
  }

  onClick(event) {
    console.log(event.rating);
  }
}
