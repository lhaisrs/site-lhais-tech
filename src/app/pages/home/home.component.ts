import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/header/header.component";
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { TimelineComponent } from "../../components/timeline/timeline.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { HighlightsComponent } from "../../components/highlights/highlights.component";
import { ContentComponent } from "../../components/content/content.component";
import { ReportComponent } from "../../components/reports/reports.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: true,
    imports: [HeaderComponent, AboutMeComponent, TimelineComponent, ProjectsComponent, HighlightsComponent, ContentComponent, ReportComponent, ContactComponent, FooterComponent]
})
export class HomeComponent {}