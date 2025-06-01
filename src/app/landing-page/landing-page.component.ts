import { Component } from '@angular/core';
import { LeftLongDescriptionComponent } from "./left-long-description/left-long-description.component";
import { TopWideStatsComponent } from "./top-wide-stats/top-wide-stats.component";
import { MidLeftQuestionCountComponent } from "./mid-left-question-count/mid-left-question-count.component";
import { MidRightAchievementsComponent } from "./mid-right-achievements/mid-right-achievements.component";
import { MidWideSubmissionHeatmapComponent } from "./mid-wide-submission-heatmap/mid-wide-submission-heatmap.component";
import { BottomSubmissionComponent } from "./bottom-submission/bottom-submission.component";

@Component({
  selector: 'app-landing-page',
  imports: [LeftLongDescriptionComponent, TopWideStatsComponent, MidLeftQuestionCountComponent, MidRightAchievementsComponent, MidWideSubmissionHeatmapComponent, BottomSubmissionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
