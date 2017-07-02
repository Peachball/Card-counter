window.addEventListener('DOMContentLoaded', function() {
	var app = new Vue({
		el: '#app',
		data: {
			'players': ['p1', 'p2', 'p3'],
			'cards': function() {
				var o = {'c': [], 'h': [], 's': [], 'd': []}
				for(var i = 1; i <= 13; i++) {
					var c = ['c', 'h', 's', 'd'];
					for(var j = 0; j < c.length; j++) {
						o[c[j]].push(i.toString());
					}
				}
				return o;
			}(),
			'storage': {},
		},
		methods: {
			pickCard: function(s, c) {
				console.log(s, c, "picked");
			},
			toggle: function(s, c, $event) {
				if ($event.target.className == "off") {
					$event.target.className = "on";
				} else {
					$event.target.className = "off";
				}
				console.log($event.target);
			}
		}
	});
});
