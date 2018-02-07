var GIPHY_PUB_KEY = '5YDJV5Zn6PPI5WUlvF8l37VtJnkr9Adt';
var GIPHY_API_URL = 'https://api.giphy.com';

App = React.createClass({

	getInitialState: function() {
		return {
			loading: false,
			searchingText: '',
			gif: {}
		}
	},

	handleSearch: function(searchingText) {
		this.setState({
			loading: true
		});
		this.getGif(searchingText, function(gif) {
			this.setState({
				loading: false,
				gif: gif,
				searchingText: searchingText
			})
		}.bind(this));
	},

	getGif: function(searchingText, callback) {
		var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);

		const promise = new Promise(function(resolve, reject) {

			xhr.onload = function() {

			if(xhr.status === 200) {
				var data = JSON.parse(xhr.responseText).data;
				var gif = {
					url: data.fixed_width_downsampled_url,
					sourceURL: data.url
				};
				callback(gif)
			}
		}

		})

		xhr.send();
	},

	render: function() {
		var url = 'http://giphy.com';

		var styles = {
			textAlign: 'center',
			margin: '0 auto',
			width: '90%'
		}

		return (
				<div style={styles}>
					<h1>Wyszukiwarka GIFów</h1>
					<p>Znajdz gifa na <a href={url}>giphy</a>. Nacisnij enter, aby pobrac kolejne gify</p>
					<Search 
						onSearch={this.handleSearch}
					/>
					<Gif 
						loading = {this.state.loading}
						url = {this.state.gif.url}
						sourceUrl = {this.state.gif.sourceURL}
					/>
				</div>
			)
	}
})