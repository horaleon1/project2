<template>
	<div class="map-container">
		<div
			:id="divId"
			:style="{width: width + 'px', height: height + 'px'}"
		>			
		</div>
	</div>
</template>

<script>
let GoogleMapsLoader = require('google-maps');



export default {
	data() {
		return {
			latitude: 0,
			longitude: 0,
			divId: 'abc'
		};
	},

	props: {
		apiKey: {
			type: String,
			default: 'AIzaSyCHB7fzFranaqMKbud-JdC_4FwwPNsrNKs'
		},
		width: {
			default: 375
		},
		height: {
			default: 450
		}
	},

	mounted() {
		this.divId = 'map' + Math.random();
		GoogleMapsLoader.KEY = this.apiKey;
		GoogleMapsLoader.VERSION = '3.37';
		this.getLocation();		
	},

	methods: {
		getLocation() {
			if (window.navigator.geolocation) {
				window.navigator.geolocation.getCurrentPosition((position) => {
					this.latitude = position.coords.latitude;
					this.longitude = position.coords.longitude; 

					GoogleMapsLoader.load(google => {
						let map = new google.maps.Map(document.getElementById(this.divId), {
						    zoom: 16,
						    center: {lat: this.latitude, lng: this.longitude},
						    disableDefaultUI: true
						});

						let myLatlng = new google.maps.LatLng(this.latitude, this.longitude);

						let marker = new google.maps.Marker({
							map:map,
						    position: myLatlng,
						    title:"You are here!"
						});
						
						/* to change marker position 
						 let newLatlng = new google.maps.LatLng(-24.397, 140.644);
    					marker.setPosition(newLatlng); */
					});


				});
			} else {
				alert("Geolocation is not supported by this browser.");
			}
		}
	}
}
</script>
<style scoped>
.map-container{

}
</style>

