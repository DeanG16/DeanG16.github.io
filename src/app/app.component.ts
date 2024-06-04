import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'investment-site';

	public links = [
		{
			title: 'A Message from Warren E. Buffett',
			subtext: ''
		},
		{
			title: 'News Releases from Berkshire Hathaway and from Warren Buffett',
			subtext: 'Updated May 4, 2024'
		},
		{
			title: 'Annual & Interim Reports',
			subtext: 'Updated May 4, 2024'
		},
		{
			title: 'Annual Meeting Information',
			subtext: 'Updated April 16, 2024'
		},
		{
			title: 'Link to SEC Filings',
			subtext: ''
		},
		{
			title: 'Berkshire Hathaway Energy Investor Presentations',
			subtext: ''
		},
		{
			title: 'Special Letters from Warren & Charlie RE:Past, Present and Future',
			subtext: ''
		},
		{
			title: `Warren Buffett's Letters to Berkshire Shareholders`,
			subtext: 'Updated February 24, 2024'
		},
		{
			title: 'Links to Berkshire Subsidiary Companies',
			subtext: ''
		},
		{
			title: `Charlie Munger's Letters to Wesco Shareholders`,
			subtext: ''
		},
		{
			title: 'Corporate Governance',
			subtext: ''
		},
		{
			title: 'Celebrating 50 Years of a Profitable Partnership',
			subtext: '(A commemorative book first sold at the 2015 Annual Meeting and now for sale on eBay.)'
		},
		{
			title: 'Sustainability',
			subtext: ''
		},
		{
			title: 'Common Stock Information',
			subtext: ''
		},
		{
			title: 'Letters from Warren E. Buffett Regarding Pledges to Make Gifts of Berkshire Stock',
			subtext: ''
		},
		{
			title: `Facts Regarding Berkshire's 2021 Investments in Activision Common Stock`,
			subtext: ''
		},
		{
			title: `Berkshire Activewear`,
			subtext: ''
		},
	]
}
