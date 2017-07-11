var Animate = (function() {
	function _Animate($ct) {
		this.$ct = $ct;
		this.init();
		this.bind();
	}
	
	_Animate.prototype.init = function(){
		var $foldingBtn = this.$foldingBtn = $ct.find('.folding_page')
	}
	
	return {
		init: function($ct) {
			$ct.each(function(index, node) {
				new _Animate($(node))
			})
		}
	}
})()


Animate.init($('body'))