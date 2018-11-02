import { Component, OnInit } from '@angular/core';
import { Metric } from '../../core/models/metric';
import { MetricsService } from '../../core/services/metrics/metrics.service';
import { getMockList } from '../../core/models/mock/metric-mock';
import { Tracker } from '../../core/models/Tracker';
import { TrackersService } from '../../core/services/trackers/trackers.service';

@Component({
  selector: 'mymetrics-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  metrics: Metric[] = getMockList();
  trackers: Tracker[];

  constructor(private metricService: MetricsService, private trackerService: TrackersService) {
  }

  ngOnInit() {
    this.getTrackers();
  }

  getTrackers() {
    this.trackerService.getTrackers().subscribe(res => this.setMetrics(res));

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

  setMetrics(trackers: Tracker[]) {
    console.log(typeof trackers);

    for (var tracker in trackers) {
      console.log(typeof tracker);
      this.metrics.push(new Metric({type: '', value: 3}));
    }
  }
}
