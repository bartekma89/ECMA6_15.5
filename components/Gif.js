var GIPHY_LOADING_URL = 'http://tf2glass.com/trade/spinner.gif';

var styles = {
	minHeight: '310px',
	margin: '0.5em'
}

Gif = React.createClass({
	
	getURL: function () {
			return this.props.sourceUrl || GIPHY_LOADING_URL
		},

	render: function() {
		var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;

		return (
				<div id='gif' style={styles}>
					<a href={this.getURL()} alt='view this on githy' target='new'>
						<img 
							id='gif' 
							src={url}
							style={{maxWidth:'350px', width:'100%'}}
						/>
					</a>
				</div>
			);
	}	
});