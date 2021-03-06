class PanelButtons {	
	constructor() {
		this._panel = document.querySelector('#panel-body');
		this._panelSites = config.getPanelSites();
		this._populatePanel();
	}

	_buildPanelButton(id, className, callback = null) {
		const panelButton = document.createElement('div');
		panelButton.id = `button-${id}`;
		panelButton.className = className;
		if (callback) panelButton.addEventListener('click', () => {callback();});
		return panelButton;
	}

	_buildPanelButtonImage(id, className, background) {
		const buttonImage = document.createElement('div');
		buttonImage.id = id;
		buttonImage.className = className;
		buttonImage.style.setProperty('background-image', background);
		return buttonImage;
	}

	_generateFromManual(id, icon, callback) {

		const panelButton = this._buildPanelButton(
			`${id}`,
			'panel-button',
			callback
		);

		const buttonImage = this._buildPanelButtonImage(
			`button-image-${id}`,
			'panel-button-image',
			`url('assets/buttons/${icon}.svg')`
		);
			
		panelButton.appendChild(buttonImage);
		this._panel.appendChild(panelButton);
	}
	
	_generateFromList() {
		for (let i = 0; i < (this._panelSites.length); i++) {
	
			const site = this._panelSites[parseInt(i, 10)].site;
			const icon = this._panelSites[parseInt(i, 10)].icon;
			const url = this._panelSites[parseInt(i, 10)].url;
	
			// Create an href
			const panelLink = document.createElement('a');
			panelLink.className = 'panel-link';
			panelLink.href = url;
			panelLink.target = '_blank';
			panelLink.tabIndex = '-1';
	
			// Create div container
			const panelButton = this._buildPanelButton(
				site,
				'panel-button'
			);
	
			// Create div container for button icon
			const buttonImage = this._buildPanelButtonImage(
				`button-image-${i}`,
				'panel-button-image',
				`url('assets/webcons/${icon}.svg')`
			);
	
			// Append divs
			panelButton.appendChild(buttonImage);
			panelLink.appendChild(panelButton);
			this._panel.appendChild(panelLink);
		}
	}

	_populatePanel() {
		// Create theme switcher
		this._generateFromManual(
			'web-menu',
			'web-menu',
			() => {
				// Look web-menu.js
				console.log('Toggle web menu');
			}
		);

		// Create web shortcuts
		this._generateFromList();

		// Create search engine switcher button
		this._generateFromManual(
			'search-engine',
			'search-engine', 
			() => {
				// Look search-engine-settings.js
				console.log('Switch search engine');
			}
		);

		// Create theme switcher
		this._generateFromManual(
			'theme-switch',
			'theme-switch',
			() => {
				// Look theme-switcher.js
				console.log('Switch theme');
			}
		);
	}
}
