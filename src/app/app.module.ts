import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CardComponent } from './components/card/card.component';
import { RankComponent } from './components/rank/rank.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { RankLineComponent } from './components/rank/rank.line.component';
import { TeamPipe } from './filters/team';
import { AgendaPipe } from './filters/agenda';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSidenavModule, MdProgressSpinnerModule, MdTabsModule,
         MdToolbarModule, MdIconModule, MdListModule, MdCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        CardComponent,
        CalendarComponent,
        AgendaComponent,
        RankComponent,
        RankLineComponent,
        TeamPipe,
        AgendaPipe
    ],
    imports: [
      BrowserModule,
        HttpModule,
        BrowserAnimationsModule,
      MdSidenavModule, MdProgressSpinnerModule, MdTabsModule, MdToolbarModule,
      MdIconModule, MdListModule, MdCardModule,
        FlexLayoutModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'calendar/:team', component: CalendarComponent, },
            { path: 'rank/:team', component: RankComponent, },
            { path: 'agenda/:date', component: AgendaComponent, },
            { path: '**', redirectTo: 'home' }
        ])

    ]
})
export class AppModule {
}
